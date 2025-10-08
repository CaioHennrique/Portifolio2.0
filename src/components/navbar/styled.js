import styled, {keyframes, css} from "styled-components";
import { IoClose } from "react-icons/io5";


const slideIn = keyframes`

  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }

`

const  slideOut = keyframes`

  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.8rem ;
    background-color:  black;
    position: absolute;
    right: 0;
    width: 100%;
    bottom: -122px;
    gap:.8rem;
    font-size: 1.3rem;
    opacity: 0;
    transform: translateX(100%);
    transition: all 1s ease-in-out;
    animation: ${({ ativo }) => (ativo ? css`${slideIn} 0.4s forwards` : css`${slideOut} 0.4s forwards`)};

    &.ativo {
        opacity: 1;
        transform: translateX(0);
    }

    a{
        color: white;
        position: relative;
        width: fit-content;
        

        &::before{
            position: absolute;
            content: "";
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #7C3AED;
            transition: all .5s ease-in-out;
        }

        &:hover::before{
            
            width: 100%;
            
        }
    }

   div{
    display: flex;
    margin :-1.4rem -.95rem;
    justify-content: end;
    background-color: black;
   }


`

const IconClose = styled(IoClose)`

    font-size: 1.5rem;
    color: white;

`


export { Container, IconClose }