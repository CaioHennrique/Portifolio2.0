import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../../cards.json";
import { ContainerProjeto, Container } from "./style";
import Descricao from "../descricao";
import Button from "../button";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {EffectCoverflow} from "swiper/modules"



function SwiperCard() {


    return (

        <Container>

            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={10}
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
                                    <Button transparente={true} target = "_blank" link={info.github}> <span><FaGithub /></span> GitHub </Button>
                                </div>
                            </ContainerProjeto>

                        </SwiperSlide>

                    ))}

            </Swiper>

        </Container>
    )



}

export default SwiperCard