"use client"
import {useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React from 'react'
import Bootstraphome from '@/components/Bootstraphome'
function Page() {
  const { data: session } = useSession()
  const router = useRouter()
  if(session){
  return (
    
    <>
      <div>
      <Bootstraphome/>
      </div>
    </>
  )
  }

  else
  {
    return(
      <>
      {router.push('/')}
    </>
    )
  }
}

export default Page