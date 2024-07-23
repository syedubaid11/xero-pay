import { Dashboardtop } from "../components/dashboardtop";
import { Top } from "../components/top";
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