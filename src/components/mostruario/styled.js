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



const icon = css`

font-size: 3rem;
margin: .5rem .4rem; 

  @media ${Breakpoints.extraGrande} {

        font-size: 4.5rem ; 
        margin: 0;
        
    }
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
color: yellow;
`


const Background = styled.div`

  background: var(--Background);
  position: relative;
  min-height: 100vh;
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

        margin-bottom:5rem ; 
        
    }

     @media ${Breakpoints.grande} {

        margin-bottom:25rem ; 
        
    }

     @media ${Breakpoints.extraGrande} {

        margin-bottom: 20rem ; 
        
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
     margin: 1rem 0;
    padding: 0rem;
     width: 95%;  
    
}

 @media ${Breakpoints.extraGrande} {

        p{
            margin: 2rem 0;
            width: 90%;
        }
    }

`

const Navbar = styled.div`

    display: flex;
    width: 95%;
    justify-content: space-around;
    padding: .3rem 0;
    margin-bottom: 1rem;
    border-radius: 10px;
    background-color: #1a243675;   
    
    @media ${Breakpoints.medio} {

        padding: .5rem 0;
        
    }


    @media ${Breakpoints.extraGrande} {
        padding: .6rem 0;
        max-width: 80%;   

        p{
            margin: 2rem 0;
        }
    }
`


const Botao = styled.button`
    color: white;
    background: ${({ $ativo }) => ($ativo ? "var(--CorButtonRoxo);" : "transparent")};
    border-radius: 10px;
    font-size:.8rem;
    border: none;
    width: 8.4rem;
    height: 2.7rem;
    border-radius: 10px;
    font-weight: bold;
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

    @media ${Breakpoints.tablet} {

       font-size: 1.2rem;
       width: 12rem;
       height: 4.1rem;
        
    }

    @media ${Breakpoints.grande} {

       font-size: 1.3rem;
       width: 12rem;
       height: 4.5rem;
       cursor: pointer;
        
    }

    @media ${Breakpoints.extraGrande} {

       font-size: 1.4rem;
       width: 14rem;
       height: 5rem;
        
    }
`
const Lista = styled.ul`
    flex-wrap: wrap;
   
    border-radius: 10px;
    width: 90%;
    margin-top: 1rem;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: .5rem;

    li{
        background-color: #1A2436 ;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0px 10px 15px #080b11dc;
        cursor: pointer;
        transition: transform .3s linear;

        &:hover{
            transform: scale(1.1);
        }
    }


    @media ${Breakpoints.medio} {
    gap: 2rem;
        
    }

    @media ${Breakpoints.extraGrande} {

     width: 70%;

     li{
        padding: 1.5rem;
     }
     
    }
`
const FadeWrapper = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 100%;
height: 50vh;
animation: ${fadeIn} 1s ease-in-out;


`

export { Background, Container, Navbar, Botao, Lista, ReactIcon, JsIcon, HtmlIcon, CssIcon, StyledcomponentsIcon, FadeWrapper }