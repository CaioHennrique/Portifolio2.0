import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import Breakpoints from "../../style/breakpoints";

const Cabecalho = styled.header`

    background-color: black;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 99;

    @media ${Breakpoints.grande} {

        padding: 1.5rem;
        
    }

    
   

`

const IconMenu = styled(IoIosMenu)`

    font-size: 1.5rem;
    color: white;

    @media ${Breakpoints.medio} {

        font-size: 2.2rem;
        
    }

    @media ${Breakpoints.tablet} {

        display: none;
        
    }
    
`

export { Cabecalho ,IconMenu }