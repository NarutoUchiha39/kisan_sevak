'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
const GlobalContext = createContext(
    {
        data:'',
        setData:()=>[],
        status:'All',
        setStatus:()=>'',
        Spinner:false,
        setSpinner:()=>''
    }
)
export const GlobalContextProvider = ({children}) =>{
    const [data,setData] = useState({id_problem:[],problem_description:[],farmer_name:[],photo:[],farmer_id:[]})
    const [status,setStatus] = useState({status:"All"})
    const [Spinner,setSpinner] = useState(false)
    
    return (
        <GlobalContext.Provider value={{data,setData,status,setStatus,setSpinner}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);