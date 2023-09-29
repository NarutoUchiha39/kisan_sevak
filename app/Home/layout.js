"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useEffect,useState } from 'react'

export default function layout({ children }) {
    
    return (
        <>
            <Navbar/>
            <div className='Requests' style={{width:'100%',height:'88.2vh',display:'grid',gridTemplateColumns:'0.23fr 1fr'}}>
                <Sidebar/>
                {children}
            </div>
        </>
    )
  }