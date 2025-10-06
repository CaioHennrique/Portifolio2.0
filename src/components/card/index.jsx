import { ContainerProjeto } from "./styled"
import Descricao from "../descricao"
import Button from "../button";

import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function Card({img, descricao, titulo, linkProjeto, linkGit}) {

    return (
                <ContainerProjeto>

                    <img src={img}/>


                    <h2>{titulo}</h2>
                    <Descricao>{descricao}</Descricao>
                    <div>
                        <Button link={linkProjeto}> <span><FaProjectDiagram /></span> Ver Projeto</Button>
                        <Button transparente={true} link={linkGit} target="_blank"> <span><FaGithub /></span> GitHub </Button>
                    </div>

                </ContainerProjeto>
    )

}

export default Card