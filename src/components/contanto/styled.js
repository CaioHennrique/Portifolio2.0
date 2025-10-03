import styled from "styled-components";

const Background = styled.div`

  background: #0C151F;
  background: linear-gradient(180deg,rgba(12, 21, 31, 1) 8%, rgba(37, 37, 88, 1) 30%, rgba(36, 29, 66, 1) 48%, rgba(12, 21, 31, 1) 100%);
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
  z-index: 2;
  align-items: center;
  flex-direction: column;
  width: 100%;


`

const Formulario = styled.div`

  display: flex;
  flex-direction: column;
  width: 90%;
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

`

export {Container, Background, Formulario}