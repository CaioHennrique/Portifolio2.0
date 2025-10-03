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

const ContentPrincipal = styled.main`

 z-index: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 
    h2{
        color: white;
    }

    div{
        z-index: 2;
        display: flex;
        gap: 1.5rem;

        span {
            margin-right:.3rem;
           
        }
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
        box-shadow: rgba(66, 30, 143, 0.2) 0px 3px 20px 20px, rgba(37, 0, 245, 0.48) 0px 2px 16px 0px;

        &:active{
            background-color: #7C3AED;
        }
    }

    

`

export { ContentPrincipal, IconContent, Background }