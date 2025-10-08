import styled, {css} from "styled-components";
import Breakpoints from "../../style/breakpoints";

const BtnPadrao = css`

width: 8.5rem;
height: 2.8rem;
border-radius: 10px;
border: none;
margin-top: 3rem;
background-color: var(--CorButtonRoxo);
color: white;
font-weight: bold;
font-size:.84rem;
display: flex;
align-items: center;
justify-content: center;

@media ${Breakpoints.medio} {

    width: 10rem;
    height: 3.2rem ;
    font-size: 1rem;
}

`

 const  Btn = styled.a`
 ${BtnPadrao}
`

 const  BtnTransparent = styled.a`

${BtnPadrao}
background-color: rgba(61, 18, 96, 0.1);
color: var(--CorButtonRoxo);
border: 1px solid var(--CorButtonRoxo);

`

export {Btn, BtnTransparent}