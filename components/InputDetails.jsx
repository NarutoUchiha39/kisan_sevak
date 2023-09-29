"use client"
import React from 'react'
import styles from '../CSS/Login.module.css'
export default function InputDetails({name,email,password,Update_Fields}) {
  return (
    
            <>
                   <div className={styles.title}>
                        <div className={styles.header}>
                            Become Registered Expert 
                        </div>

                        <div className={styles.description}>
                            Help Farmers Help India Grow
                        </div>
                    </div>

                    <div className={styles.details}>

                    <div className={styles.Name+" "+styles.input}>
                                <div className={styles.name_header}>    
                                    Name
                                </div>
                                <div className={styles.name_input}>
                                    <input type="text" name="name" id={styles.name} placeholder='JohnDoe'  value={name} onChange={e=>{
                                        Update_Fields({name:e.target.value})
                                    }
                                 } />
                                </div>
                        </div>

                        <div className={styles.email+" "+styles.input}>
                                <div className={styles.email_header}>
                                    Email
                                </div>
                                <div className={styles.email_input}>
                                    <input type="email" name="email" id={styles.email} placeholder='JohnDoe@gmail.com' value={email} onChange={e=>{
                                        Update_Fields({email:e.target.value})
                                    }
                                 }/>
                                </div>
                                
                        </div>

                        <div className={styles.password+" "+styles.input}>
                            <div className="password_header">
                                Password
                            </div>

                            <div className={styles.password_header}>
                                <input type="password" name="password" id={styles.password} placeholder='********' value={password} onChange={e=>{
                                        Update_Fields({password:e.target.value})
                                    }
                                 }/>
                            </div>
                            
                        </div>
                    </div>

                    
    </>
  )
}
