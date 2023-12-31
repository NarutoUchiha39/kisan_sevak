"use client"
import React from 'react'
import Link from 'next/link'
import styles from '@/CSS/NavBar.module.css'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
function Navbar() {
  let router = useRouter()
    function logout(){
       
        signOut()
        router.push('/')
      }
      return (
        <>
            <div className={styles.NavBar}>
              <Link href = {"/"}>
                <h3 style={{position: 'absolute', left: '10%'}}>Home</h3>
              </Link>
    
              <Link href = {"/Home"}>
                <h3 style={{position: 'absolute', left: '18%'}}>View Requests</h3>
                </Link>
    
              <Link href = {"/"}>
                <h3 style={{position: 'absolute', left: '90%'}} onClick={logout}>Logout</h3>
              </Link>
              </div>
            
           
            
        </>
      )
}

export default Navbar