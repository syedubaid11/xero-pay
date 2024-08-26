import { useEffect, useState } from "react";
import axios from "axios";
import Usersinfo from "./usersinfo";
import { ButtonDashboard } from "./button-dashboard";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Users=()=>{
    const[user,setUser]=useState([ ])
    const {sid}=useParams();
    const parsedsid=sid.split('=')
    const senderid=parsedsid[1]

    const navigate=useNavigate();


    useEffect(()=>{
        axios.get('http://localhost:3000/user/data', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include the token in the Authorization header
          }
        })
        .then(response => {
          const data=response.data
          //setting up the user state
          setUser(data)          
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
            <ButtonDashboard label={"Pay"} onClick={(e)=>{navigate("/pay?rid="+item._id+"&sid="+senderid+"&name="+item.firstName)}}/>
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