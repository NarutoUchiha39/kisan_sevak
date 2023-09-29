import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css/NavBar.css'
import '../css/SideBar.css'
import '../css/Requests.css'

export default function NavBar() {
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
        <div className="NavBar">
          <Link to = {"/"}>
            <h3 style={{position: 'absolute', left: '10%'}}>Home</h3>
          </Link>

          <Link to = {"/Home"}>
            <h3 style={{position: 'absolute', left: '18%'}}>View Requests</h3>
            </Link>

          <Link to = {"/"}>
            <h3 style={{position: 'absolute', left: '90%'}} onClick={logout}>Logout</h3>
          </Link>
          </div>
        
        <div className='Requests' style={{width:'100%',height:'88.2vh',display:'grid',gridTemplateColumns:'0.23fr 1fr'}}>
            <Outlet/>
        </div>
        
    </>
  )
}
