import { useEffect, useState } from "react";
import axios from "axios";

export const Users=()=>{
    const[user,setUser]=useState("")
    const[balance,setBalance]=useState("")


    useEffect(()=>{
        axios.get('http://localhost:3000/user/data')
        .then(response => {
          setUser(response.data)
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });

    },[])


    /* map the users and display the firstName and balance 
    const map=user.map((item)=>{
      return(
        
        
        
      )
    })
    */
    

    return(
        <>
        
        </>
    )

}