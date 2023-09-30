import React, { useEffect, useState } from 'react'
import '../css/Reply.css'
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useRouter } from 'next/navigation'

export default function Reply() {
  const router = useRouter()
  let{id} = useParams()
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
    let result = await fetch(`http://localhost:3000/reply/${id}`,{ headers:{"Content-Type":"application/json"},
        method:"GET"
    }).then((res)=>{
        return res.json()
    })


    setProblem((element)=>({
      ...element,_id:result.result._id,problem_description:result.result.problem_description,farmer_name:result.result.farmer_name,farmer_id:result.result.farmer_id,photo:result.result.photo, sent_at: result.result.sent_at
    }))
}

fetch_problem()

},[id])
  return (
    
    <div className="problem_details_container">
            
        <div className="problem_details_left">
          <div className="sent_time">Sent At: {problem.sent_at}</div>
          <div className="farmer_name">Sender: {problem.farmer_name}</div>
          <Link to = {`/WriteReply/${id}_${problem.farmer_id}`}>
            <input className = "reply_button" type = "button" value = "Reply"/>
          </Link>
        </div>

        <div className="problem_details_right">
          <div className="inner_container_problemdetailsright">
            <h3>Image of Crop</h3>
            <div className = "problem_details_right_hr"></div>
            <img src={`data:image/png;base64,${problem.photo}`} height={200} width={200} className = "disease_img"/>
            <h3>Further Description of Problem</h3>
            <div className = "problem_details_right_hr"></div>
            <p>{problem.problem_description}</p>
          </div>
        </div>
    </div>

  )
}
