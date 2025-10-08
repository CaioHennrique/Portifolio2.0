import styled, {css} from "styled-components";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

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

  background: linear-gradient(180deg,rgba(12, 21, 31, 1) 8%, rgba(37, 37, 88, 1) 30%, rgba(36, 29, 66, 1) 48%,rgba(12, 21, 31, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
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
`


const Botao = styled.button`
    color: white;
    background: ${({ $ativo }) => ($ativo ? "#6939FF" : "#1f2937d0")};
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
`
const Lista = styled.ul`
    width: 93%;
    flex-wrap: wrap;
    background-color: #1A2436 ;
    border-radius: 10px;
    padding: 1rem .8rem 1.5rem;
    text-align: justify;
    list-style-type: none;
    display: flex;
`

export { Background, Container, Navbar, Botao, Lista, ReactIcon, JsIcon, HtmlIcon, CssIcon, StyledcomponentsIcon }