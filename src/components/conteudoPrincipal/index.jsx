import Titulo from "../titulo"
import { ContentPrincipal, IconContent, Background } from "./style"
import Button from "../button";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoNewspaper } from "react-icons/io5";
import Curriculum from "../../assets/curriculum.pdf"

function ConteudoPrincipal() {

    return (

        <Background>
            <ContentPrincipal>

                <IconContent>
                    <a href="https://www.linkedin.com/in/caiohenrique-dev/" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/CaioHennrique" target="_blank"> <BsGithub /></a>
                </IconContent>

                <h2>Caio Henrique</h2>
                <Titulo>Desenvolvedor Front-End</Titulo>

                <div>
                    <Button  link={Curriculum}  > <span><IoNewspaper /></span> Donwload CV</Button>
                    <Button transparente = {true} link="#contato"> <span><BsFillPersonCheckFill /></span> Contato</Button>
                </div>

            </ContentPrincipal>
        </Background>

    )
}

export default ConteudoPrincipal