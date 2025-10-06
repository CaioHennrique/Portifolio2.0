import { Btn, BtnTransparent } from "./styled"

function Button({ children, transparente, link, target }) {

   return (

      <>
         {transparente ? (<BtnTransparent href={link} target={target} rel="noopener noreferrer" >{children}</BtnTransparent>) : (<Btn href={link} target="_blank" rel="noopener noreferrer" >{children}</Btn>)}
      </>

   )

}

export default Button