"use client"
import React from 'react'
import styles from '../CSS/Login.module.css'
import {signIn} from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from './Context/store';
import Spinner from '@/components/Spinner';
import Errors from '@/components/Errors';
function LoginPage() {
    const {setSpinner,setError} = useGlobalContext()
    const router = useRouter()
    
      
    async function  HandleSubmit(event)
    {
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        event.preventDefault();
        setSpinner(true)
        const res = await signIn("credentials",
        {
            email,
            password,
            redirect:false,
        })

        setSpinner(false)
        console.log(res)
        if(res?.error) return setError({notification:"error",message:res.error})
        sessionStorage.setItem("authenticated",true) 
        // sessionStorage.setItem("name",),
        sessionStorage.setItem("email",email)

       router.push('/Home')

        
        // fetch('/api/auth/login',{
        //     method:'POST',
        //     headers:{'Content-Type':"application/json"},
        //     body:JSON.stringify({
        //         "email":email,
        //         "password":password
        //     })
        // }).then((response)=>{
        //     return(response.json())
        // }).then(async(res)=>{
        //     if(res.status == "success"){
        //         setSpinner(false)
        //         sessionStorage.setItem("authenticated",true)
        //         sessionStorage.setItem("name",res.name),
        //         sessionStorage.setItem("email",res.email)
        //         router.push('/Home')
        //     }

        //     if(res.status == "error")
        //     {
        //         setSpinner(false)
        //         setError({notification:"error",message:res.message}) 
        //     }
        // })  
    }
  return (
    
    <div>
       <Spinner/>
       <Errors/>
        <form onSubmit={HandleSubmit} id={styles.form}>
            <div className={styles.LoginPage}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <div className={styles.header}>
                            Welcome Back
                        </div>

                        <div className={styles.description}>
                            Welcome back! Please enter your details
                        </div>
                    </div>

                    <div className={styles.details}>
                        <div className={styles.email +" "+styles.input}>
                                <div className={styles.email_header}>
                                    Email
                                </div>
                                <div className={styles.email_input}>
                                    <input type="email" name="email" id={styles.email} placeholder='JohnDoe@gmail.com'/>
                                </div>
                                
                        </div>

                        <div className={styles.password+" "+styles.input}>
                            <div className={styles.password_header}>
                                Password
                            </div>

                            <div className={styles.password_input}>
                                <input type="password" name="password" id={styles.password} placeholder='********'/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="submit" style={{marginTop:'-5%'}}>
                        <input type="submit" value="Sign Up" id={styles.Submit}/>
                    </div>

                    <div className="Register" style={{fontSize:'15px',color:'grey',marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                        Want to help farmers? 
                        <div className="register" style={{marginTop:'10px'}}>
                        <Link href={'/Register'}>Register</Link> 
                        </div>
                        
                    </div>
                </div>


            </div>
        </form>
        </div>
  )
}

export default LoginPage