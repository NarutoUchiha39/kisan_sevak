"use client"
import React from 'react'
import Bootstrapreply from '@/components/Bootstrapreply'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
function page() {
  const { data: session } = useSession()
  const router = useRouter()
  if(session){
  return (
    
    <>
      <div>
        <Bootstrapreply/>
      </div>
    </>
  )
  }

  else
  {
    router.push('/')
  }
}
export default page