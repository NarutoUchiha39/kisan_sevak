import React from 'react'
import { HashLoader } from 'react-spinners'
import { useGlobalContext } from '@/app/Context/store'

function Spinner() {
    const {color,Spinner} = useGlobalContext()
    
    const override ={
        position:"absolute",
        display:"flex",
        alignItems:"center",
        width:"100%",
        height:"100vh",
        justifyContent:"center",
        opacity:1,
        zIndex:1000
    }

  return (
    <>
     <HashLoader
        color={color}
        loading={Spinner}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
        />
    </>
  )
}

export default Spinner