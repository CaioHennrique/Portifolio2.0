import Titulo from "../titulo";
import { Background, Container, Content } from "./styled";
import Img from "../../assets/CaioHenrique.png"
import Button from "../button";
import Descricao from "../descricao";
import Curriculum from "../../assets/curriculum.pdf"
import { IoNewspaper } from "react-icons/io5";
import { SiPolymerproject } from "react-icons/si";

function SobreMim() {

    return (

        <Background id="sobremim">
            <Container>

                <Titulo>Sobre Mim</Titulo>
                <img src={Img} alt="" />

                <Content>
                    
                    <h2>Ola, Me Chamo</h2>
                    <h3>Caio Henrique</h3>

                    <Descricao>
                        Sou desenvolvedor Front end movido pela curiosidade e vontade de criar experiências digitais marcantes. Acredito que cada linha
                        de  código conecta inovação  e proposito.
                        Gosto de unir tecnologia e negócios para
                        gerar soluções de valor real. Sou desenvolvedor Front end movido pela curiosidade e vontade de criar experiências digitais marcantes. Acredito que cada linha
                        de  código conecta inovação  e proposito.
                        Gosto de unir tecnologia e negócios para
                        gerar soluções de valor real.
                    </Descricao>

                </Content>

                <div>
                    <Button link={Curriculum}  > <span><IoNewspaper /></span>Donwload CV</Button>
                    <Button transparente={true} link ="#projetos"> <span><SiPolymerproject /></span>Ver Projetos</Button>
                </div>

            </Container>
        </Background>

    )
}

export default SobreMim