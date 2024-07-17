import { useEffect, useState } from "react";
import axios from "axios";

export const Users=()=>{
    const[user,setUser]=useState("")
    const[balance,setBalance]=useState("")


    useEffect(()=>{
        axios.get('http://localhost:3000/user/data')
        .then(response => {
          console.log(response.data.user)
          const users=response.data;
        
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });

    },[])

    return(
        <>
        Hello
        </>
    )

}