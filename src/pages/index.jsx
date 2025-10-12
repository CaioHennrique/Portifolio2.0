
import Contato from "../components/contanto";
import ConteudoPrincipal from "../components/conteudoPrincipal";
import Footer from "../components/footer";
import Header from "../components/header";
import Mostruario from "../components/mostruario";
import SobreMim from "../components/sobreMim";

function Home() {

    return (

        <>
           <Header/>
           <ConteudoPrincipal/>
           <SobreMim/>
           <Mostruario/>
           <Contato/>
           <Footer/>
        </>

    )
}

export default Home