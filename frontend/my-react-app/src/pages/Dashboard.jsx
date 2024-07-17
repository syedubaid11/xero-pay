import { useEffect, useState } from "react";
import { Dashboardtop } from "../components/dashboardtop";
import { Top } from "../components/top";
import { transaction } from "../components/transactionhistory";
import axios from "axios";
import { Users } from "../components/users";

export const Dashboard=()=>{
    return(
        <>
        
        <div className="flex justify-center border-b-2">
           <Top label={"xero pay"}/>
        </div>
        <Dashboardtop/>
        <Users/>

        </>
    )
}