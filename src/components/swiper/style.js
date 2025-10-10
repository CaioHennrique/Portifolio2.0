import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";


const Container = styled.div`
width: 97vw;


.swiper-button-next,.swiper-button-prev
{
    background-color: #cccccc33;
    border-radius: 50%;
    padding: .4rem;
    align-items: center;
    margin-top:.3rem;
   
}

.swiper-pagination {
    margin-bottom: -.5rem;
}

`




const ContainerProjeto = styled.div`

width: 85vw;
margin: 0 auto;
background-color: #1A2436 ;
border-radius: 10px;
padding: 1rem 1rem 1.5rem;
text-align: justify;

    img{
        height: 14em;
        width: 100%;
        border-radius: 10px;

    }

    h2{
        color: white;
        margin-top: .5rem;
        font-size: 1.4rem;
    }

    div{

        display: flex;
        gap: 1rem;

        span{
            margin-right:.3rem;
        }
        
        a{
            margin-top: 0;
            width: 8rem;
            height: 2.5rem;
        }
    }

    @media ${Breakpoints.medio} {

        img{
            height: 20rem;
        }
        h2{
            font-size:1.6rem;
        }

        div{
            a{
                height: 3rem;
                width: 10rem;
            }
        }
        
    }
    @media ${Breakpoints.grande} {

      max-width: 30rem;

      div{
            a{
                width: 14rem;
                height: 4rem ;
                font-size: 1.4rem;
            }
        }

  
        
    }

     @media ${Breakpoints.grande} {

      max-width: 35rem;

        h2{
            font-size:2rem;
        }


        p{
            font-size: 1.4rem;
        }
   

  
        
    }


`
export { ContainerProjeto, Container }