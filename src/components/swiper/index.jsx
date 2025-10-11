import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../../cards.json";
import { ContainerProjeto, Container } from "./style";
import Descricao from "../descricao";
import Button from "../button";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";




function SwiperCard() {

    const [slidePerView, setSlidePerView] = useState(2);

    useEffect(() => {

        function controleSlider() {
            if (window.innerWidth < 800) {
                setSlidePerView(1);
            } else {
                setSlidePerView(2);
            }
        }

        window.addEventListener("resize", controleSlider);

       

    }, [])


    return (

        <Container>

            <Swiper

                navigation
                pagination={{ clickable: true }}
                slidesPerView={slidePerView}
                spaceBetween={0}
            >

                {

                    Cards.map((info) => (

                        <SwiperSlide >

                            <ContainerProjeto>
                                <img src={info.imagem} alt={info.titulo} />

                                <h2>{info.titulo}</h2>
                                <Descricao>{info.descricao}</Descricao>
                                <div>
                                    <Button link={info.link}> <span><FaProjectDiagram /></span> Ver Projeto</Button>
                                    <Button transparente={true} target="_blank" link={info.github}> <span><FaGithub /></span> GitHub </Button>
                                </div>
                            </ContainerProjeto>

                        </SwiperSlide>

                    ))}

            </Swiper>

        </Container>
    )



}

export default SwiperCard