import { Background, Container, Navbar, ContainerProjeto } from "./styled"
import Descricao from "../descricao"
import Titulo from "../titulo"
import Img from "../../assets/codeMovies.png"
import Button from "../button";

import { SiPolymerproject } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Card from "../card";



function Mostruario() {

    return (

        <Background id="projetos">
            <Container>

                <Titulo> Mostruário de Portfólio</Titulo>

                <Descricao>
                    Explore minha jornada através de projetos, cada seção representa
                    um marco na minha trajetória de aprendizado continuo
                </Descricao>

                <Navbar>
                    <button > <span><FaProjectDiagram /></span>Ver Projetos</button>
                    <button > <span><SiPolymerproject /></span>Tecnologias</button>
                </Navbar>

                <Card img= {Img} titulo="CodeMovies" descricao=" Aplicação web inspirada em plataformas de streaming, 
                        onde o usuário pode explorar filmes e séries, assistir 
                        trailers e visualizar detalhes de cada produção. Desenvolvido
                        com React e Styled-Components, focado em design responsivo e experiência do usuário." linkProjeto="https://codemovies.netlify.app/" 
                        linkGit="https://github.com/CaioHennrique/DevMovies"  />

            </Container>
        </Background>
    )

}

export default Mostruario