import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";

const Background = styled.div`
  background: var(--Background);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
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

    h1{
      margin: 0 auto;
      z-index: 1;
      padding-bottom: 5rem;
    }

`

const Container = styled.div`

 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 z-index: 1;

  img{
    
    height: 13rem;
    border-radius: 50%;
    background-color: #CCC;
    margin: 2.5rem 0;
    box-shadow: rgba(66, 30, 143, 0.62) 0px 8px 24px 0px, rgba(34, 7, 188, 0.68) 0px 2px 16px 0px;
  }

  @media ${Breakpoints.grande} {
      
     flex-direction: row-reverse;
     justify-content: space-around;

     img{
      height: 18rem;
      margin: 0;
      margin-bottom: 3rem;
     }
  }

  @media ${Breakpoints.extraGrande} {
      
     justify-content: space-evenly;

     img{
      height: 50%;
      margin: 0;
      margin-bottom: 3rem;
     }
  }

`

const ContainerButton = styled.div`

  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;

    span {
      margin-right:.3rem;
    }
    
    a{
      margin:1rem 0;
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

@media ${Breakpoints.medio} {
  
  padding: 0 4rem;

  h2{
    font-size: 1.8rem;
  }

  h3{
    font-size: 1.5rem;
  }
}

@media ${Breakpoints.grande} {
  
    width: 50%;
    padding: 0;

    h2{
      font-size: 2.2rem;
  }

    h3{
      font-size: 1.8rem;
    }

}



@media ${Breakpoints.extraGrande} {
  
    width: 40%;
    padding: 0;

    h2{
      font-size: 2.8rem;
  }

    h3{
      font-size: 2.2rem;
    }
}




`
export { Background, Container, Content, ContainerButton }