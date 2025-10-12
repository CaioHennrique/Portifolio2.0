import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

:root {
    --Background: linear-gradient(180deg,rgba(0, 0, 0, 1) 8%, rgba(37, 37, 88, 1) 30%, rgba(36, 29, 66, 1) 48%, rgba(0, 0, 0, 1) 100%);
    --CorButtonRoxo: #7C3AED;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    
    
}

html{
    scroll-behavior: smooth;
     background-color: black;
}

`
