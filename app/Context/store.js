'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

const GlobalContext = createContext(
    {
        data:'',
        setData:()=>[],
        status:'All',
        setStatus:()=>'',
        Spinner:false,
        setSpinner:()=>'',
        color:"#36d7b7",
        setColor:()=>'',
        Error:{notification:null,message:null},
        setError:()=>''
    }
)
export const GlobalContextProvider = ({children}) =>{
    const [data,setData] = useState({id_problem:[],problem_description:[],farmer_name:[],photo:[],farmer_id:[]})
    const [status,setStatus] = useState({status:"All"})
    const [Spinner,setSpinner] = useState(false)
    const [color, setColor] = useState("#36d7b7");
    const [Error,setError] = useState({notification:null,message:null});
    
    return (
        <GlobalContext.Provider value={{Spinner,data,setData,status,setStatus,setSpinner,color,setColor,Error,setError}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);