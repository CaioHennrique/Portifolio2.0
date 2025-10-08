import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";

export const Container = styled.footer`
background-color: black;
background-color: #020617;
text-align: center;
padding: 1.5rem;

p{
    font-size: 1rem;
}

@media ${Breakpoints.medio} {

    padding: 2rem;

    p{
        font-size: 1.3rem;
    }
    
}

`