import PropTypes from 'prop-types';
import styles from  '@/CSS/Errors.module.css'
import { useGlobalContext } from '@/app/Context/store';
import { useEffect } from 'react';

export default function Errors()
{
    const {Error} = useGlobalContext()
    const message = Error.notification
    useEffect(()=>{
        function handleError()
        {
            
            let element = document.querySelector(".message")
            if(element){
                element.style.display="none"
                element.style.transition=""
            }
            
        }
        setTimeout(()=>{
            handleError()
        },5000)
        
        return(()=>{
            clearTimeout(handleError)
        })
    },[message])
    return(
       
        <>
            {
                Error.notification && (message == "error"? <div className={styles.error +" "+"message"}  style={{width:'33.7%',position:'absolute',top:'31px',marginLeft:'31%',height:'20px',display:'flex',justifyContent:'center',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} id='message'>
                    
                    <img src="https://i.imgur.com/GnyDvKN.png" alt="" style={{marginRight:"1%"}}/> 
                    {Error.message}
                    
                </div>:
                
                <div className={styles.success +" "+"message"} style={{width:'33.7%',position:'absolute',top:'31px',marginLeft:'31%',height:'20px',display:'flex',justifyContent:'center',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} id='message'><img src="https://i.imgur.com/GnyDvKN.png" alt="" style={{marginRight:"1%"}}/> {Error.message}</div>)
            }

        </>
    )
}

Errors.propTypes={
    notifications : PropTypes.object,
    control:PropTypes.func
}