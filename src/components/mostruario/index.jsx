import {
    Background, Container, Navbar, Botao, Lista, ReactIcon,
    HtmlIcon, JsIcon, CssIcon, StyledcomponentsIcon,
    FadeWrapper
} from "./styled"
import Descricao from "../descricao"
import Titulo from "../titulo"
import Img from "../../assets/codeMovies.png"

import { SiPolymerproject } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import Card from "../card";
import { useState } from "react";






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
                        <Card img={Img} titulo="CodeMovies" descricao=" Aplicação web inspirada em plataformas de streaming, 
                        onde o usuário pode explorar filmes e séries, assistir 
                        trailers e visualizar detalhes de cada produção. Desenvolvido
                        com React e Styled-Components, focado em design responsivo e experiência do usuário." linkProjeto="https://codemovies.netlify.app/"
                            linkGit="https://github.com/CaioHennrique/DevMovies" />
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