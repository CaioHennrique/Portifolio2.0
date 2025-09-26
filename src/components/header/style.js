import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";

const Cabecalho = styled.header`

background-color: transparent;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
width: 100%;

`

const IconMenu = styled(IoIosMenu)`

font-size: 1.5rem;
color: white;

`

export { Cabecalho ,IconMenu }