import { useState } from "react";
import { Dashboardtop } from "../components/dashboardtop";
import { Top } from "../components/top";
export const Dashboard=()=>{
    const[balance,setBalance]=useState("")
    return(
        <div>
        <div className="flex justify-center border-2">
           <Top label={"xero pay"}/>
        </div>
        <Dashboardtop/>
        

        </div>
    )
}