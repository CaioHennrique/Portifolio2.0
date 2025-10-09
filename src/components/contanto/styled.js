import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";

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

`

const Container = styled.div`

  display: flex;
  z-index: 2;
  align-items: center;
  flex-direction: column;
  width: 100%;

  button{
      
    width: 8.5rem;
    height: 2.8rem;
    border-radius: 10px;
    border: none;
    margin-top: 3rem;
    background-color: var(--CorButtonRoxo);;
    color: white;
    font-weight: bold;
    font-size:.84rem;
      
  }

  @media ${Breakpoints.medio} {

    button {
      width: 10rem;
      height: 3.5rem;
      font-size: 1rem;
    }
    
  }

   @media ${Breakpoints.grande} {

    button {
      width: 14rem;
      height: 4rem ;
      font-size: 1.4rem;
    }
    
  }

   @media ${Breakpoints.grande} {

    button {
      width: 16.5rem;
    height: 4.6rem ;
    font-size: 1.6rem;
    }
    
  }


`

const Formulario = styled.div`

  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  gap: 0.5rem;
  margin-top: 1.5rem;

    input, textarea{
    background-color: #121d2fff ;
    border: none;
    padding: .7rem;
    border-radius: 10px;
    font-size: 1.2rem;
    resize: none;
    color: white;
  }

  @media ${Breakpoints.grande} {

    input, textarea{
  
    padding: 1.3rem;
    font-size: 1.7rem;
  }
    
  }

    @media ${Breakpoints.extraGrande} {

        max-width: 1000px;

    input, textarea{
  
    padding: 1.6rem;
    font-size: 1.8rem;
  }
    
  }

   
`

export { Container, Background, Formulario }