"use client"
import React from 'react'
import Link from 'next/link'
import styles from '@/CSS/NavBar.module.css'
function Navbar() {
    async function logout(){
        const res = fetch(
          'http://localhost:3000/Logout',{
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify({}),
    
          }
        ).catch((err)=>{console.log(err)})
    
        window.location = '/Login'
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