"use client"
import React from 'react'
import "leaflet/dist/leaflet.css"
import "@/CSS/leaflet.css"
import { MapContainer,TileLayer} from 'react-leaflet'
import "leaflet-boundary-canvas";



function Maps() {
  return (
    <>
    <MapContainer center={[20.593683, 78.962883]} zoom={5}>
        <TileLayer

         url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
         
        />

</MapContainer>

    </>
  )
}

export default Maps