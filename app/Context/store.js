'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
const GlobalContext = createContext(
    {
        data:'',
        setData:()=>[],
        status:'All',
        setStatus:()=>''
    }
)
export const GlobalContextProvider = ({children}) =>{
    const [data,setData] = useState({id_problem:[],problem_description:[],farmer_name:[],photo:[],farmer_id:[]})
    const [status,setStatus] = useState({status:"All"})
    
    return (
        <GlobalContext.Provider value={{data,setData,status,setStatus}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);