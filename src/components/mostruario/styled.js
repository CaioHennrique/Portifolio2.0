import styled from "styled-components";

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

export { Background, Container, Navbar, Botao  }