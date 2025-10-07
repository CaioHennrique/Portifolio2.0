import { Container, IconClose } from "./styled"









function NavbarHeader({ mostrarNavbar , ativo}) {

    return (
        <Container ativo = {ativo}>

            <div>
                <IconClose onClick={() => mostrarNavbar(false)}  />
            </div>

            <a href="#home">Home</a>
            <a href="#sobremim">Sobre Mim</a>
            <a href="#projetos">Mostruário</a>
            <a href="#contato">Contato</a>

        </Container>

    )

}

export default NavbarHeader
