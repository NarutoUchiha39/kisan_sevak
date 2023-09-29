"use client"
import React, { useState } from 'react'
import styles from '../../CSS/Login.module.css'
import MultiStepHook from '../CustomHooks/MultiStepHook';
import InputDetails from '../../components/InputDetails';
import Experience from '../../components/Experience';
const INITIAL_DATA = {
    name:"",
    email:"",
    password:"",
    years:"",
    link:"",
    crop:"",
    
};



function Register() {
    const [data,setData] = useState(INITIAL_DATA);
    function Update_Fields(updatedFields){
        setData(prev=>{
            return {...prev,...updatedFields}
        })
    }

    async function HandleSubmit()
    {
        
        console.log(
            data.crop,
            data.email,
            data.password,
            data.years,
            data.name,
            data.link
        )

        fetch('/api/auth/Register',{
            headers:{"Content-Type":'application/json'},
            body:
            JSON.stringify({
                crop:data.crop,
                email:data.email,
                password:data.password,
                years:data.years,
                name:data.name,
                link:data.link
        }),
        method:"POST"
        }).then(result=>{
            return result.json()
        }).then(result=>{
            console.log(result)
        })
        
    }
    const {steps,next,goTo,previous,step,Element,isFirst,isLast} = MultiStepHook([<InputDetails {...data} Update_Fields={Update_Fields} key={0}/>,<Experience {...data} Update_Fields={Update_Fields} key={1}/>]);
  return (
    
    <div>   
        <div  id={styles.form}>
        <div className={styles.LoginPage}>
            <div className={styles.content}>
                        
                            {step}

                    
                            <div className={styles.submit} style={{marginTop:'-7%',display:'flex',justifyContent:'space-between'}}>

                                    {!isFirst && <button id={styles.Submit} onClick={previous} style={{width:'40%'}}>Previous</button>}
                                    {isLast ? <input type="submit" value="Finish" id={styles.Submit} style={{width:'40%'}} onClick={HandleSubmit}/>:<button  id={styles.Submit} onClick={next} style={{width:'40%'}}>Next</button>}  
                            </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Register