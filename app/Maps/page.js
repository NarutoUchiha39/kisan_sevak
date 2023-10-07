"use client"
import dynamic from 'next/dynamic'
import React from 'react'
const Maps = dynamic(()=>import('@/components/Maps'),{ssr:false})
import Map from '@/components/Map'
function page() {
  return (
    <div>
            <Map/>
    </div>
  )
}

export default page