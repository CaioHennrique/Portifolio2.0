import styled from "styled-components";

const Background = styled.div`

  background: var(--Background);
  background-repeat: no-repeat;
  background-size: cover;
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
         z-index: 0;

    }

`

const Container = styled.div`

 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 z-index: 1;

    img{
      height: 10rem;
      border-radius: 100%;
      background-color: #CCC;
      margin: 2.5rem 0;
      box-shadow: rgba(66, 30, 143, 0.62) 0px 8px 24px 0px, rgba(34, 7, 188, 0.68) 0px 2px 16px 0px;
    }

    div{
      display: flex;
      gap: 1.5rem;

       span {
            margin-right:.3rem;
        }
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