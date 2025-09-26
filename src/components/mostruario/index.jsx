import { Background, Container, Navbar, ContainerProjeto } from "./styled"
import Descricao from "../descricao"
import Titulo from "../titulo"
import Img from "../../assets/codeMovies.png"

function Mostruario() {

    return (

        <Background>
            <Container>

                <Titulo> Mostruário de Portfólio</Titulo>

                <Descricao>
                    Explore minha jornada através de projetos, cada seção representa
                    um marco na minha trajetória de aprendizado continuo
                </Descricao>

                <Navbar>
                    <a href="#"> $ <span>Projetos</span></a>
                    <a href="#"> $ <span>Tecnologias</span></a>
                </Navbar>

                <ContainerProjeto>
                    <img src={Img} alt="capa codeMovies" />

                    <div>

                        <h2>CodeMovies</h2>
                        <Descricao>
                            Lorem ipsum dolor sit amet co
                            nsectetur adipisicing elit. Error, velit eveniet i
                            llo magnam est obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis hic officiis voluptates voluptatum omnis qui.
                        </Descricao>
                    </div>
                </ContainerProjeto>


            </Container>
        </Background>
    )

}

export default Mostruario