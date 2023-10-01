"use client"
import {useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Bootstraphome from '@/components/Bootstraphome'
function Page() {

  
  return (
        
    <>
      <div>
      <Bootstraphome/>
      </div>
    </>
  )
  }
  


export default Page