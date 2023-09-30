"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/CSS/WriteReply.module.css'
import { useParams,useRouter } from 'next/navigation'
import { useGlobalContext } from '@/app/Context/store'
import Spinner from './Spinner'
export default function BootstrapwriteReply() {
  let  router = useRouter()
  let {setSpinner} = useGlobalContext()
  let[details,setDetails] = useState({first_name:"",last_name:"",photo:"",sentAt:""})
  let {id} = useParams();
  console.log(id)
  useEffect(()=>{
    if(!sessionStorage.authenticated){
     router.push('/')
    }
  },[])

  async function submitHandle(){
    let diagnosis = document.getElementById('Diagnosis').value
    let prescription = document.getElementById('prescription').value
    console.log(id)
    let result = await fetch(`http://localhost:3000/Replies/${id}_${sessionStorage.email}_`, 
    {method:'POST',
    headers:{'Content-Type':"application/json"},
    body:JSON.stringify({
      prescription:prescription,
      diagnosis:diagnosis
  })}
  ).then((res)=>{router.push('/Home')})
  
}

  useEffect(()=>{
   
      async function fetchFarmerDetails(){
        let total = id.split("_")
        let adhar = total[1]
        let problem_id = total[0]
        let result = await fetch(`/api/Details/${adhar}`,{ headers:{"Content-Type":"application/json"},
        method:"GET"
        }).then((res)=>{
            return res.json()
        })

        let results2 = await fetch(`/api/reply/${problem_id}`,{ headers:{"Content-Type":"application/json"},
        method:"GET"
        }).then((res)=>{
            return res.json()
        })
        console.log(results2)
        setDetails((element)=>({
            ...element, first_name:result.first_name,last_name:result.last_name,photo:results2.result.photo,sentAt:results2.result.sent_at
        }))
        setSpinner(false)
        
      }
      setSpinner(true)
      fetchFarmerDetails()
  },[id])
  return (
    <>
    <Spinner/>
    <div className={styles.problem_details_container}>

        <div className={styles.problem_details_left}>
          <div className={styles.sent_time}>Sent At: {details.sentAt}</div>
          <div className={styles.farmer_name}>Sender: {details.first_name+" "+details.last_name}</div>
          <input className = {styles.reply_button} type = "button" value = "Send" onClick={submitHandle}/>
        </div>

        <div className={styles.problem_details_right}>
          <div className={styles.inner_container_problemdetailsright}>
            <h3>Image of Crop</h3>
            <div className = {styles.problem_details_right_hr}></div>
            <img src = {`data:image/png;base64,${details.photo}`} className = {styles.disease_img}/>
            <h3>Diagnosis</h3>
            <div className = {styles.problem_details_right_hr}></div>
            <input type = "text" placeholder = "Write your diagnosis here..." className = {styles.expert_diagnosis} id='Diagnosis'></input>
            <h3>Prescription</h3>
            <div className = {styles.problem_details_right_hr}></div>
            <textarea placeholder = "Write your precription here..." className = {styles.expert_prescription} id='prescription'></textarea>
          </div>
        </div>
    </div>
    </>

  )
}