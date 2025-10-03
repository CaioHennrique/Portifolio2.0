import Button from "../button";
import Titulo from "../titulo";
import { Background, Container, Formulario } from "./styled";

function Contato() {

    return (

        <Background>
            <Container>
                <Titulo>Contato</Titulo>

                <Formulario >
                    <input type="text" placeholder="nome"/>
                    <textarea rows="7" placeholder="digite sua mensagem"></textarea>
                </Formulario>
                <Button>Enviar</Button>

            </Container>
        </Background>

    )

}

export default Contato