import React from 'react'
import Requests from './Requests'

export default function HomePage(prop) {
  return (
        <>
        {sessionStorage.authenticated?<Requests data={prop.data}></Requests>:window.location='/Login'}
        
        </>
  )
}
