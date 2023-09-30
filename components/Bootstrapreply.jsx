"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter,useParams } from 'next/navigation'
import { useGlobalContext } from '@/app/Context/store'
import Link from 'next/link'
import styles from '@/CSS/Reply.module.css'
import Spinner from '@/components/Spinner'

function Bootstrapreply() {
    const {id} = useParams()
    const router = useRouter()
    const {setSpinner} = useGlobalContext()
    console.log(id)
    
    let [problem,setProblem] = useState({
        _id:"",
        problem_description:"",
        farmer_name:"",
        farmer_id:"",
        photo:"",
        sent_at:""
    })
  
    useEffect(()=>{
        
      if(!sessionStorage.authenticated){
          router.push('/')
      }
    })
  
    useEffect(()=>{
      async function fetch_problem(){
      let result = await fetch(`/api/reply/${id}`,{ headers:{"Content-Type":"application/json"},
          method:"GET"
      }).then((res)=>{
          return res.json()
      })
  
  
      setProblem((element)=>({
        ...element,_id:result.result._id,problem_description:result.result.problem_description,farmer_name:result.result.farmer_name,farmer_id:result.result.farmer_id,photo:result.result.photo, sent_at: result.result.sent_at
      }))
      setSpinner(false)
  }
  setSpinner(true)
  fetch_problem()
  
  },[id])
    return (
      <>
      <Spinner/>
      <div className={styles.problem_details_container} >
              
          <div className={styles.problem_details_left}>
            <div className={styles.sent_time}>Sent At: {problem.sent_at}</div>
            <div className={styles.farmer_name}>Sender: {problem.farmer_name}</div>
            <Link href = {`/WriteReply/${id}_${problem.farmer_id}`}>
              <input className = {styles.reply_button}  type = "button" value = "Reply"/>
            </Link>
          </div>
  
          <div className={styles.problem_details_right}>
            <div className={styles.inner_container_problemdetailsright}>
              <h3>Image of Crop</h3>
              <div className = {styles.problem_details_right_hr}></div>
              <img src={`data:image/png;base64,${problem.photo}`} height={200} width={200} className = {styles.disease_img}/>
              <h3>Further Description of Problem</h3>
              <div className = {styles.problem_details_right_hr}></div>
              <p>{problem.problem_description}</p>
            </div>
          </div>
      </div>
      </>
    )
}



export default Bootstrapreply