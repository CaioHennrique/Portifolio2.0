import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";

const Title = styled.h1`
  
    font-size: 1.6rem;
    background: linear-gradient(90deg,rgba(0, 21, 255, 1) 45%, rgba(179, 122, 249, 1) 70%);
    background-clip: text;
    color: transparent;

    @media ${Breakpoints.medio} {

        font-size: 2.2rem;

    }

      @media ${Breakpoints.grande} {

        font-size: 2.6rem;

    }

       @media ${Breakpoints.extraGrande} {

        font-size: 2.7rem;

    }
`
export default Title
