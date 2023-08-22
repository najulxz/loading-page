import Menu from "./components/Menu";
import Imagem2 from "./img/logo-palmeiras.png"
import Foto from "./components/foto";
import Imagem from "./img/landingimage.jpg"; 
import "./components/global.module.css";
import Nome from "./components/nome";
import Info from "./components/info";
import Texto from "./components/texto";




function App() {
    
  return (
     <>
     <Menu logo={Imagem2}/>
     <br></br>
        <Nome nome="SEJA UM SÓCIO AVANTI" />

        <Foto foto={Imagem} />
         
        <Info/>
        <br></br>
        <Texto p1="Torcedor:"
        d1="-avanti"
        t1="-Ingressos"
      
        p2="Marketing:"
        d2="-patrocinadores e parceiros"
        t2="-financiamento de produtos"

        p3="Instagram: Palmeiras"
        d3="Google: Palmeiras"
        t3="tt=palmeiras"

        p4="Futebol:"
        d4="-Elenco Profissional"
        t4="-comissão tecnica"
       />
        
       


     </> 
  );
}
export default App;
