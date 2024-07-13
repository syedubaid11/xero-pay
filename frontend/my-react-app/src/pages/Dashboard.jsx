import { useEffect, useState } from "react";
import { Dashboardtop } from "../components/dashboardtop";
import { Top } from "../components/top";
import { transaction } from "../components/transactionhistory";
import axios from "axios";

export const Dashboard=()=>{
    const[balance,setBalance]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:3000/user/data')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });

    },[])
   
    
    return(
        <>
        
        <div className="flex justify-center border-b-2">
           <Top label={"xero pay"}/>
        </div>
        <Dashboardtop />
        
        
        

        </>
    )
}