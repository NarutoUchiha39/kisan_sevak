"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
const Map = dynamic(()=>import('@/components/Map'),{ssr:false})

function page() {
  const[map,setMap] = useState([])
  const {id}  = useParams() 
    useEffect(()=>{
        async function fetch_retailers(){ 
          const retailer = await fetch(`/api/retailers/${id}`,{
            headers:{"Content-Type":"application/json"},
            method:"GET"
          })
          const res = await retailer.json()
          setMap(()=>({
            ...map,...res
          }))

          
    
        }
        fetch_retailers()
      },[])
  return (
    <div>
            <Map map={map}/>
    </div>
  )
}

export default page