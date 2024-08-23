import { useEffect, useState } from "react";
import axios from "axios";
import Usersinfo from "./usersinfo";
import { ButtonDashboard } from "./button-dashboard";
import { Navigate, useNavigate } from "react-router-dom";

export const Users=()=>{
    const[user,setUser]=useState([ ])

    const navigate=useNavigate();


    useEffect(()=>{
        axios.get('https://xero-pay-backend.vercel.app/user/data')
        .then(response => {
          const data=response.data
          //setting up the user state
          setUser(data)
          console.log(data)
          
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });


    },[])

    const map=user.map((item)=>{
      return(
        <div className="flex mt-5 font-light justify-between text-xl border-t-2">
          <Usersinfo name={item.firstName} />
          <div className="mt-6">
            <ButtonDashboard label={"Pay"} onClick={(e)=>{navigate("/pay?id="+item._id+"&name="+item.firstName)}}/>
          </div>
        </div>
        ) 
    })
  
    return(
      <>
        <div >
          {map}
        </div>

      </>
    )


   



}