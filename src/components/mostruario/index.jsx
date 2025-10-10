import {
    Background, Container, Navbar, Botao, Lista, ReactIcon,
    HtmlIcon, JsIcon, CssIcon, StyledcomponentsIcon,
    FadeWrapper
} from "./styled"
import Descricao from "../descricao"
import Titulo from "../titulo"

import { SiPolymerproject } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { useState } from "react";
import SwiperCard from "../swiper";






function Mostruario() {
    const [secaoAtiva, setSecaoAtiva] = useState("projetos");

    return (

        <Background id="projetos">
            <Container>

                <Titulo> Mostruário de Portfólio</Titulo>

                <Descricao>
                    Explore minha jornada através de projetos, cada seção representa
                    um marco na minha trajetória de aprendizado continuo
                </Descricao>

                <Navbar>
                    <Botao $ativo={secaoAtiva === "projetos"}
                        onClick={() => setSecaoAtiva("projetos")} > <span><FaProjectDiagram /></span>Ver Projetos</Botao>
                    <Botao $ativo={secaoAtiva === "tecnologias"}
                        onClick={() => setSecaoAtiva("tecnologias")}> <span><SiPolymerproject /></span>Tecnologias</Botao>
                </Navbar>


                {secaoAtiva === "projetos" ? (
                    <FadeWrapper key="projetos">
                        <SwiperCard/>
                    </FadeWrapper>
                ) : (
                    <FadeWrapper key="tecnologias">
                        <Lista>
                            <li><ReactIcon /></li>
                            <li><JsIcon /></li>
                            <li><HtmlIcon /></li>
                            <li><CssIcon /> </li>
                            <li><StyledcomponentsIcon /> </li>                                                    
                        </Lista>
                    </FadeWrapper>
                )}



            </Container>
        </Background>
    )

}

export default Mostruario