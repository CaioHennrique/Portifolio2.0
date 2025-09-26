import styled from "styled-components";

const Background = styled.div`

  background: #0C151F;
  background: linear-gradient(180deg,rgba(12, 21, 31, 1) 8%, rgba(37, 37, 88, 1) 30%, rgba(36, 29, 66, 1) 48%);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  position: relative;
  padding: 7rem 0;
  
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

const ContentPrincipal = styled.main`

 z-index: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 
    h2{
        color: white;
    }

    div{
        display: flex;
        gap: 1rem;
    }
`

const IconContent = styled.div`

 margin-bottom: 2rem;

    a{
        background-color:#2D2B4A ;
        display: flex;
        padding: .8rem ;
        border-radius: 100%;
        font-size: 1.8rem;
    }

`

export { ContentPrincipal, IconContent, Background }