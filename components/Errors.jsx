import PropTypes from 'prop-types';
import '../css/errors.css'

export default function Errors(props)
{
    return(
        <>
            {
                props.notifications.notification && <div className={`${props.notifications.notification}`} style={{width:'30%',position:'absolute',top:'31px',marginLeft:'33%',height:'20px'}} id='message'><img src="https://i.imgur.com/GnyDvKN.png" alt="" style={{marginRight:"1%"}}/> {props.notifications.message}</div>
            }

        </>
    )
}

Errors.propTypes={
    notifications : PropTypes.object,
    control:PropTypes.func
}