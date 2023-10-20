// CSS
import './Map.css'

// GOOGLE
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCmWwV_FcL_7SUfaVJ-OyEvBonkUBLcgpo',
  })
  return (
    <> { !isLoaded ?
      <h1>Loading...</h1>
    :
    <div className='card'>
      <GoogleMap 
        zoom={10} 
        center={{lat: -35, lng: -61}} 
        mapContainerClassName='mapa'>
        <Marker position={{lat: -35.81527579034355, lng: -61.89752895731923}}/>
      </GoogleMap>
    </div>
    }</>
  )
}

export default Map