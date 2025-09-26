import styled from "styled-components";

const Background = styled.div`

  background: #0C151F;
  background: linear-gradient(180deg,rgba(12, 21, 31, 1) 8%, rgba(37, 37, 88, 1) 30%, rgba(36, 29, 66, 1) 48%, rgba(12, 21, 31, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  
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
 align-items: center;
 justify-content: center;
 flex-direction: column;

    img{
      height: 10rem;
      border-radius: 100%;
      background-color: #CCC;
      margin: 2.5rem 0;
    }

    div{
      display: flex;
      gap: 1.5rem;
    }

`

const Content = styled.article`

  display: flex;
  padding: 0 1rem;
  justify-content: center;
  flex-direction: column;
  text-align: justify;

    h2{
        font-size: 1.4rem;
        background: linear-gradient(90deg,rgba(0, 21, 255, 1) 5%, rgba(179, 122, 249, 1) 40%);
        background-clip: text;
        color: transparent;

    }

    h3{
      color: white;
      margin-bottom:.5rem;
    }


`
export { Background, Container, Content }