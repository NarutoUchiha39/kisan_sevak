import IndianBoundary from '@/public/IndiaBoundary.geo.json'
import "leaflet/dist/leaflet.css"
import "@/CSS/leaflet.css"
import { MapContainer, TileLayer,GeoJSON } from 'react-leaflet'
function Map() {
    const indiaBounds = [
        [6.745, 68.162],
        [35.501, 97.395]
      ];
    console.log(IndianBoundary)
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} maxBounds={indiaBounds}> 
        <TileLayer url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'/>
        <GeoJSON data={IndianBoundary}/>
        {/* <GeoJSON data={IndianStates}/> */}
    </MapContainer>
  )
}

export default Map