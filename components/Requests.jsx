import Link from 'next/link'

export default function Requests(data) {
 
    return (
        
         <div className="mainbody_requests_container">

            <h1>Help A Farmer</h1>
            <div className = "mainbody-requests">
           {
            data.data.farmer_name.map((element,i)=>(
                    <div className="" key={i}>
                        <div className = "mainbody-requests-hr"></div>
                        <Link href = {`/Reply/${data.data.id_problem[i]}`}>
                            <div className="requests_row">
                                <div className = "names">{element} </div>
                                <div className="description_short">{data.data.problem_description[i]}</div>
                            </div>      
                        </Link>   
                    </div>              
        )
        
        )
            }

                <div className = "mainbody-requests-hr"></div>  
            </div>
        </div>
      
    )
  }
