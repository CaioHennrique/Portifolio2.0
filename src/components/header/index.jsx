
import {Cabecalho, IconMenu } from "./style"
import  Titulo  from "../titulo"
import NavbarHeader from "../navbar"
import { useState } from "react"


function Header() {

    const [navbar, setNavbar] = useState(false);

    return (

        <>
            <Cabecalho>
                <Titulo>Caio Henrique</Titulo>
               <NavbarHeader mostrarNavbar = {setNavbar} ativo = {navbar}/>
                <IconMenu onClick={() => setNavbar(!navbar)} />
            </Cabecalho>
        </>

    )
}

export default Header
