import Link from 'next/link'
import styles from '../CSS/Requests.module.css'
import { useGlobalContext } from '@/app/Context/store'

export default function Requests() {
    const {status,data,setData} = useGlobalContext()

 
    return (
        
         <div className={styles.mainbody_requests_container}>

            <h1>Help A Farmer</h1>
            <div className = {styles.mainbody_requests}>
           {
            data.farmer_name.map((element,i)=>(
                    <div className="" key={i}>
                        <div className = {styles.mainbody_requests_hr}></div>
                        <Link href = {`/Reply/${data.id_problem[i]}`} id={styles.a}>
                            <div className={styles.requests_row}>
                                <div className = {styles.names}>{element} </div>
                                <div className={styles.description_short}>{data.problem_description[i]}</div>
                            </div>      
                        </Link>   
                    </div>              
        )
        
        )
            }

                <div className = {styles.mainbody_requests_hr}></div>  
            </div>
        </div>
      
    )
  }
