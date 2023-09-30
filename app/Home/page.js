"use client"
import {useRouter } from 'next/navigation'
import React from 'react'
import Bootstraphome from '@/components/Bootstraphome'
function Page() {
  const router = useRouter()
  return (
    <div>
     <Bootstraphome/>
    </div>
  )
}

export default Page