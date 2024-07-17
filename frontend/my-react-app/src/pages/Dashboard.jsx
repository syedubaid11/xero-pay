import { useEffect, useState } from "react";
import { Dashboardtop } from "../components/dashboardtop";
import { Top } from "../components/top";
import { transaction } from "../components/transactionhistory";
import axios from "axios";
import { Users } from "../components/users";

export const Dashboard=()=>{
    return(
        <>
        <Top label={"xero pay"}/>
        <Dashboardtop/>
        <Users/>
        </>
    )
}