import { useEffect, useState } from "react";
import axios from "axios";
import Usersinfo from "./usersinfo";
import { ButtonDashboard } from "./button-dashboard";

export const Users=()=>{
    const[user,setUser]=useState([ ])
    const[userid,setUserid]=useState([ ])


    useEffect(()=>{
        axios.get('http://localhost:3000/user/data')
        .then(response => {
          const data=response.data
          const id=data.map((item)=>item.firstName)
          setUser(id)
          console.log(user)
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });


    },[])

    const map=user.map((item)=>{
      return(
        <div className="flex mt-5 font-light justify-between text-xl ">
          <Usersinfo name={item} />
          <ButtonDashboard label={"Pay"}/>
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