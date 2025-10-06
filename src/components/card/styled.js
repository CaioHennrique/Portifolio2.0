import styled from "styled-components";


const ContainerProjeto = styled.div`

    width: 93%;
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

`
export {ContainerProjeto }