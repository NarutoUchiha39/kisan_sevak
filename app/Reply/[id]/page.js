"use client"
import React, { useEffect } from 'react'
import Bootstrapreply from '@/components/Bootstrapreply'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
function page() {
    return(
    <>
      <div>
        <Bootstrapreply/>
      </div>
    </>
  )
  }
export default page