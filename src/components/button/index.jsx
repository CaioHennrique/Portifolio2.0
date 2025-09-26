import { Btn } from "./styled"

function Button ({children, ...rest}){

return (

   <Btn{...rest}>{children}</Btn>

)

}

export default Button