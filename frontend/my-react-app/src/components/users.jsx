import { useEffect, useState } from "react";
import axios from "axios";
import Usersinfo from "./usersinfo";

export const Users=()=>{
    const[user,setUser]=useState([ ])
    const[balance,setBalance]=useState("")


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
        <Usersinfo name={item} />
        )
    })

    return(
      <>
        {map}
      </>
    )


   



}