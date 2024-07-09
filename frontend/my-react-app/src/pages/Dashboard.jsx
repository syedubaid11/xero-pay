import { useState } from "react";
import { Dashboardtop } from "../components/dashboardtop";
import { Top } from "../components/top";
import { transaction } from "../components/transactionhistory";

export const Dashboard=()=>{
    const[balance,setBalance]=useState("")
    
    return(
        <>
        
        <div className="flex justify-center border-b-2">
           <Top label={"xero pay"}/>
        </div>
        <Dashboardtop />
        <transaction />
        
        
        

        </>
    )
}