"use client"
import dynamic from 'next/dynamic'
import React from 'react'
const Maps = dynamic(()=>import('@/components/Maps'),{ssr:false})
function page() {
  return (
    <div>
            <Maps/>
    </div>
  )
}

export default page