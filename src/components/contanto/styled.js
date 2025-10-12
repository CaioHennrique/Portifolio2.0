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
    width: 12rem;
    font-size: 1.4rem;
    transition: box-shadow .3s linear;
    cursor: pointer;
    

    &:hover{
       box-shadow: rgba(96, 19, 160, 0.35) 2px 2px  12px 8px;
  }
}
  
}

  @media ${Breakpoints.extraGrande} {

  button {
    width: 15rem;
    height: 4.2rem ;
  }
  
}


`

const Formulario = styled.div`

  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  gap: 1rem;
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

    input:focus, textarea:focus {
      border: 1px solid var(--CorButtonRoxo);
       box-shadow: 0 0 10px var(--CorButtonRoxo);
    }

  @media ${Breakpoints.grande} {
gap: 1.5rem;
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