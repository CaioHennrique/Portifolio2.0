import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";


const Container = styled.div`
width: 95vw;


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


@media ${Breakpoints.extraGrande} {
  
    width: 70vw;
        
}



`



const ContainerProjeto = styled.div`

width: 90%;
max-width: 400px ;
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
        width: 95%;
        max-width: 450px;
     
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
        width: 95%;
        max-width: 450px;
      div{
            a{
                width: 11rem;
                height: 3rem ;
                font-size: 1.2rem;
            }
        }

        p{
            margin: .2rem 0 .8rem;
        }
  
        
    }

     @media ${Breakpoints.extraGrande} {

       max-width: 500px;

        h2{
            font-size:2rem;
        }


        p{
            font-size: 1.4rem;
        }
   

  
        
    }


`
export { ContainerProjeto, Container }