// COMPONENTS
import Card from "../components/Card/Card"

// IMG
import LOGO from '../img/LOGO.jpeg' 

// TEXTO
const titulo = 'Sobre Nosotros'
const texto = 'En nuestra tienda, nos enorgullece servir como el punto de referencia para comerciantes, empresarios y emprendedores de esta encantadora localidad y sus alrededores. Desde hace años, hemos sido el aliado de confianza de aquellos que buscan productos de calidad a precios competitivos.'
const tituloCatalogo = 'Descarga nuestro catalogo de precios'
const tituloTexto = 'En este catalogo podra visualizar todos nuestros productos y sus precios actualizados a la fecha, si tiene alguna inquietud llame al 11 2222 3333.'

function Inicio() {
  return (
    <> 
    <Card titulo={titulo} texto={texto} img={LOGO}/>
    <Card titulo={tituloCatalogo} texto={tituloTexto} img={LOGO}/>
    </>
  )
}

export default Inicio