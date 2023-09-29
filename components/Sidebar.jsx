import styles from '@/CSS/SideBar.module.css'
import React from 'react'
import { useGlobalContext } from '@/app/Context/store'
function Sidebar() {

  const {setStatus} = useGlobalContext()
  function change(event){
    let classes = event.target.classList.value
    setStatus({status:`${classes}`})
    console.log(props.status)
        }
return (
        
<>

<div className={styles.Side_Bar}>
    <div className={styles.component} style={{position:'relative',width:'100%',height:'55vh', marginTop: '17vh',backgroundColor:'#a8a8a8a0',borderTopRightRadius:'2vh', borderBottomRightRadius: '2vh', left:'-10px',opacity:'0.8', overflow: 'hidden'}}>
   
            <div className={styles.filterrequests}>
                    <div className={styles.filterrequests_container}>
                            <h3>View Requests</h3>
                            <div className = {styles.borderhr}></div>
                            <a onClick={change} id="Link"><h5 className='All'>All</h5></a>
                            <div className = {styles.middlehr} ></div>
                            <a onClick={change} id="Link"><h5 className='Pending'>Pending</h5></a>
                            <div className = {styles.middlehr}></div>
                            <a onClick={change} id="Link"><h5 className='Completed'>Completed</h5></a>
                            <div className = {styles.borderhr}></div>
                    </div>
            </div>

    </div>
</div>


</>
)
}

export default Sidebar