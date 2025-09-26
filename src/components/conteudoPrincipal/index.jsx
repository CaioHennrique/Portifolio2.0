import Titulo from "../titulo"
import { ContentPrincipal,IconContent, Background} from "./style"
import Button from "../button";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function ConteudoPrincipal() {

    return (

        <Background>
            <ContentPrincipal>

                <IconContent>

                    <a href="#"><BsLinkedin /></a>
                    <a href="#"> <BsGithub /></a>
                   
                </IconContent>

                 <h2>Caio Henrique</h2>
                 <Titulo>Desenvolvedor Front-End</Titulo>

                <div>
                      <Button>Donwload CV</Button>
                      <Button>Contato</Button>
                </div>

            </ContentPrincipal>
        </Background>

    )
}

export default ConteudoPrincipal