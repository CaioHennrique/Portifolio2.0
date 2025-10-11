
const tamanho = {
    medio:"540px",
    tablet:"760px",
    grande:"920px",
    extraGrande: "1250px"
}

const Breakpoints ={
     medio: `(min-width: ${tamanho.medio})`,
     tablet: `(min-width: ${tamanho.tablet})`,
     grande: `(min-width: ${tamanho.grande})`,
     extraGrande: `(min-width: ${tamanho.extraGrande})`
}

export default Breakpoints