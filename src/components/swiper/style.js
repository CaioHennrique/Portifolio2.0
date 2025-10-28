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
height: 35rem;
margin: 0 auto;
background-color: #1A2436 ;
border-radius: 10px;
padding: 1rem ;
gap: .4rem;
text-align: justify;
display: flex;
flex-direction: column;


    img{
        height: 50%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;

    }

    p{
        width: 100%;
        margin: 0;
        padding: 0;
     
    }

    h2{
        color: white;
        font-size: 1.4rem;
    }

    div{
       
        display: flex;
        gap: 1rem;
        margin-top:.5rem;

        span{
            margin-right:.3rem;
        }
        
        a{
            margin-top: 0;
            width: 8rem;
            height: 2.5rem;
            cursor: pointer;
        }
    }

    @media ${Breakpoints.medio} {

        width: 95%;
        max-width: 450px;
        height: 43rem;
        gap: .6rem;
        padding: 1.3rem ;
     
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

    @media ${Breakpoints.tablet} {

        height: 45rem;
        gap: .8rem;
    }



    @media ${Breakpoints.grande} {
        max-width: 500px;
        padding: 1.5rem ;
        gap:.5rem;
        height: 40rem;


         img{
            height: 40%;
         }

      div{
        gap: 1rem;
            a{
                width: 11rem;
                height: 3rem ;
                font-size: 1.2rem;
            }
        }        
    }

     @media ${Breakpoints.extraGrande} {
           height: 42rem;

        img{
            height: 65%;
       

        }

        p{
            font-size: 1.4rem;
            padding: 0;
        }
   
    }


`
export { ContainerProjeto, Container }