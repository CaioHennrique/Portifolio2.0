import styled, {css} from "styled-components";

const BtnPadrao = css`

width: 8.5rem;
height: 2.8rem;
border-radius: 10px;
border: none;
margin-top: 3rem;
background-color: #7C3AED;
color: white;
font-weight: bold;
font-size:.84rem;
display: flex;
align-items: center;
justify-content: center;

`

 const  Btn = styled.a`
 ${BtnPadrao}
`

 const  BtnTransparent = styled.a`

${BtnPadrao}
background-color: rgba(61, 18, 96, 0.1);
color: #7C3AED;
border: 1px solid #7C3AED ;

`

export {Btn, BtnTransparent}