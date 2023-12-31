"use client"
import {useRouter } from 'next/navigation'
import React from 'react'
import { useGlobalContext } from '@/app/Context/store'
import { useEffect,useState } from 'react'
import Requests from './Requests'
import Spinner from './Spinner'
import { useSession } from 'next-auth/react'
function Bootstraphome() {
      const {data:session} = useSession()
      const router = useRouter()
      const [Error,setErrors] = useState({
    notification:null,message:null
  })
 


  const {status,data,setData,setSpinner,setColor} = useGlobalContext()
  
  console.log(status)
  useEffect(()=>{
      async function fetchIssues(){
        
        setSpinner(true)
          let res =  await fetch(`api/getIssues/${status.status}`,{
              headers:{"Content-Type":"application/json"},
              method:"POST",
              body:JSON.stringify({
                  email:sessionStorage.email
              })
          }).then((res)=>{
              console.log(res)
              return res.json()
          })

          console.log(res)

          let id = []
          let name= []
          let photo = []
          let problem_description = []
          let id_problem = []

          console.log(res.result)
          res.result.forEach(element => {
                  id.push(element.farmer_id)
                  name.push(element.farmer_name)
                  photo.push(element.photo)
                  problem_description.push(element.problem_description)
                  id_problem.push(element._id)
          });
          
          setData((state)=>({
                  ...state, farmer_name:name,photo:photo,problem_description:problem_description,farmer_id:id,id_problem:id_problem
      }))
      setSpinner(false)
      console.log(data)
          
      }

      fetchIssues();
  },[status])
  return (
    <>
    <Spinner/>
    <Requests></Requests>
    </>
  )
}

export default Bootstraphome