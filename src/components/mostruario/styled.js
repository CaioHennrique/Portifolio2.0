import styled from "styled-components";

const Background = styled.div`

  background: #0C151F;
  background: linear-gradient(180deg,rgba(12, 21, 31, 1) 8%, rgba(37, 37, 88, 1) 30%, rgba(36, 29, 66, 1) 48%,rgba(12, 21, 31, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
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
         z-index: -1;

    }

`

const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

p{
    margin: 1rem 0;
}



`

const Navbar = styled.div`

    display: flex;
    width: 95%;
    justify-content: space-around;
    padding: .8rem;
    margin: 2rem 0;
    border-radius: 10px;
    background-color: #1A2436;

        a{
            display: flex;
            flex-direction: column;
            color: white;
            background-color: #1F2937;
            width: 8.5rem;
            padding: .4rem 0;
            text-align: center;
            border-radius: 10px;
            font-size:.8rem;
        }
`

const ContainerProjeto = styled.div`

    width: 90%;
    background-color: #1A2436 ;
    border-radius: 10px;
    padding: 1rem .8rem 1.5rem;
    text-align: justify;

    img{
        height: 230px;
        width: 100%;
        border-radius: 10px;

    }

    h2{
        color: white;
        margin:.5rem 0;
        font-size: 1.4rem;
    }

`
export { Background, Container, Navbar, ContainerProjeto }