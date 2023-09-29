"use client"
import React from 'react'
import styles from '../CSS/Login.module.css'

export default function Experience({years,link,crop,Update_Fields}) {
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
                                    Years of experience
                                </div>
                                <div className={styles.name_input}>
                                    <input type="text" name="years" id={styles.years} value={years} onChange={e=>{Update_Fields({years:e.target.value})}}/>
                                </div>
                        </div>

                        <div className={styles.email + " " + styles.input}>
                                <div className={styles.email_header}>
                                    Link of image to degree (Only drive link accepted)
                                </div>
                                <div className={styles.email_input}>
                                    <input type="text" name="degree" value={link} id={styles.degree} onChange={e=>{Update_Fields({link:e.target.value})}}/>
                                </div>
                                
                        </div>

                        <div className={styles.password + " " + styles.input}>
                            <div className={styles.password_header}>
                                Crop Specialization
                            </div>

                            <div className={styles.password_input}>
                                <input type="text" name="specialization" value={crop} id={styles.specialization} onChange={e=>{Update_Fields({crop:e.target.value})}} />
                            </div>
                            
                        </div>
                    </div>

                    
                    
    </>
  )
}
