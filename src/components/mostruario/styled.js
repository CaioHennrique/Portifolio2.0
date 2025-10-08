import styled, { css, keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

import Breakpoints from "../../style/breakpoints";


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FadeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
animation: ${fadeIn} 1s ease-in-out;
`;



const icon = css`

font-size: 3rem;
margin: .5rem .4rem; 
`

const ReactIcon = styled(FaReact)`
${icon}
color: blue;

`
const JsIcon = styled(IoLogoJavascript)`
${icon}
color: yellow;

`

const HtmlIcon = styled(FaHtml5)`
${icon}
color: #fc5c00ff;

`

const CssIcon = styled(FaCss3)`
${icon}
color: blue;

`
const StyledcomponentsIcon = styled(SiStyledcomponents)`
${icon}
font-size: 3rem;
color: yellow;
`


const Background = styled.div`

  background: var(--Background);
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  
    &::before{

        content:"";
         background-color: rgba(0, 0, 0, .35);
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 0;
 
    }

      @media ${Breakpoints.medio} {

        margin: 10rem 0 5rem ; 
        
    }

`

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 0 .3rem;

    p{
        margin: .4rem 0 1rem ;
        padding: 0rem;
        
    }
`

const Navbar = styled.div`

    display: flex;
    width: 95%;
    justify-content: space-around;
    padding: .8rem;
    margin: 2rem 0;
    border-radius: 10px;
    background-color: #1a243675;   
    
    @media ${Breakpoints.medio} {

        padding:1rem;
        margin: 1rem 0;
        
    }
`


const Botao = styled.button`
    color: white;
    background: ${({ $ativo }) => ($ativo ? "var(--CorButtonRoxo);" : "#1f2937d0")};
    border-radius: 10px;
    font-size:.8rem;
    border: none;
    width: 8.4rem;
    height: 2.7rem;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size:.80rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        margin-right: .3rem;
        margin-top: .25rem;
    }

    @media ${Breakpoints.medio} {

       font-size: 1rem;
       width: 10rem;
       height: 3.5rem;
        
    }
`
const Lista = styled.ul`
    flex-wrap: wrap;
    background-color: #1A2436 ;
    border-radius: 10px;
    width: 90%;
    padding: 1rem .8rem 1.5rem;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin-bottom: 32.5rem;
`

export { Background, Container, Navbar, Botao, Lista, ReactIcon, JsIcon, HtmlIcon, CssIcon, StyledcomponentsIcon, FadeWrapper }