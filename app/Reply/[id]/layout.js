import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '@/CSS/NavBar.module.css'
function layout({children}) {
  return (
    <>
        <Navbar></Navbar>
        <div className={styles.Requests} style={{width:'100%',height:'88.2vh',display:'grid',gridTemplateColumns:'0.23fr 1fr'}}>
        {children}
        </div>

    </>

  )
}

export default layout