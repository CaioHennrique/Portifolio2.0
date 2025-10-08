import { GrAppsRounded } from "react-icons/gr"

const tamanho = {
    medio:"540px",
    tablet:"760px",
    grande:"900px"
}

const Breakpoints ={
     medio: `(min-width: ${tamanho.medio})`,
     tablet: `(min-width: ${tamanho.tablet})`,
     grande: `(min-width: ${tamanho.grande})`
}

export default Breakpoints