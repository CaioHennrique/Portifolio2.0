import { useRef, useState } from "react";
import Titulo from "../titulo";
import { Background, Container, Formulario } from "./styled";

function Contato() {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const nomeRef = useRef(null);

    const enviarMensagem = () => {

        if (!nome || !mensagem) {
            alert("Preencha seu nome e mensagem antes de enviar!");
            nomeRef.current.focus();
            return;
            
        } else {
            const numero = "5512988462376";
            const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            window.open(url, "_blank");
        }
    };

    return (

        <Background id="contato">
            <Container >
                <Titulo>Contato</Titulo>

                <Formulario >
                    <input type="text" placeholder="nome" value={nome}
                        onChange={(e) => setNome(e.target.value)}  ref={nomeRef}/>
                    <textarea rows="7" placeholder="digite sua mensagem" value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}></textarea>
                </Formulario>

                <button onClick={enviarMensagem}>Enviar</button>

            </Container>
        </Background>

    )

}

export default Contato