//https://youtu.be/mvQHqxmdYV0?feature=shared
import IndianBoundary from '@/public/IndiaBoundary.geo.json'
import IndianStates from '@/public/states_india.geo.json'
import "leaflet/dist/leaflet.css"
import "@/CSS/leaflet.css"
import { MapContainer, TileLayer,GeoJSON,Marker,Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import React from 'react'
import { Icon } from 'leaflet'
function Map(props) {
    const indiaBounds = [
        [6.745, 68.162],
        [35.501, 97.395]
      ];

      const customIcon = new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize:[30,30]
      })
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} maxBounds={indiaBounds}> 
        <TileLayer url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'/>
        <MarkerClusterGroup 
        chunkedLoading>
        {props.map.result.map((element,index)=>(
          <Marker position={element.geoCode} key={index} icon={customIcon}>
            <Popup>
                <h4>{element.retailer_name}</h4>
            </Popup>
          </Marker>
       

        ))}
         </MarkerClusterGroup>
        <GeoJSON data={IndianBoundary}/>
        <GeoJSON data={IndianStates}/>
    </MapContainer>
  )
}

export default Map