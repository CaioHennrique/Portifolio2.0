import styled from "styled-components";
import Breakpoints from "../../style/breakpoints";

const Description = styled.p`
  
    font-size: 1.1rem;
    color: #838181ff;

  @media ${Breakpoints.medio} {

    font-size: 1.4rem;
    
  }

   @media ${Breakpoints.extraGrande} {

    font-size: 2rem;
    
  }
`
export default Description
