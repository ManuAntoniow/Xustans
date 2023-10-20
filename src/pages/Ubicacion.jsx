// COMPONENTS
import Card from "../components/Card/Card"
import Map from "../components/Map/Map"

// IMG
import MAPA from '../img/Argentina_-_Buenos_Aires_-_Pehuajó.svg.png'
const titulo = 'Donde Encontrarnos'
const texto = ''

function Ubicacion() {
  return (
    <> 
      <Card titulo={titulo} texto={texto} img={MAPA}/>
      <Map/>
    </>
  )
}

export default Ubicacion