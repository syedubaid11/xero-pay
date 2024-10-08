import { useState } from "react";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { BottomWarning } from "../components/bottomwarning";
import { Top } from "../components/top";
import axios from "axios"
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Error } from "../components/error"

export const Signup=()=>{
    const[firstName,setfirstName]=useState('')
    const[lastName,setlastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate();
      
    return(
        <>
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          ease: "easeInOut",
        }}
        >
        
         <div className="flex justify-center border-b-2">
           <Top label={"xero pay"}/>
        </div>
        
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center w-120 ">
            
                <Heading label={"Sign Up"}/>
                <InputBox onChange={e=>{
                    setfirstName(e.target.value)
                }}label={"Enter your First Name"}placeholder={"First Name"} />
                <InputBox onChange={e=>{
                    setlastName(e.target.value)
                }}label={"Enter your Last Name"}placeholder={"Last Name "} />
                <InputBox onChange={e=>{
                    setEmail(e.target.value)
                }}label={"Enter your Email"}placeholder={"Email"} />
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} label={"Enter your Password"}placeholder={"Password"} />
                <Button onClick={async()=>{
                    const payload={
                        email:email,
                        password:password
                    }
                    try{
                        const response=await axios.post("https://xero-pay-backend.vercel.app/user/signup",{
                            email,
                            firstName,
                            lastName,
                            password
                        }
                        )
                        localStorage.setItem("token", response.data.token)
                        const userid=response.data.userId

                        await axios.post('https://xero-pay-backend.vercel.app/user/account',{
                            userId:userid
                        })

                        navigate(`/dashboard/sid=${userid}`)

                        
                    }
                    catch(error){
                        console.log(error)
                        setError("Invalid Details")
                    }
                    }
                }
                label={"Sign Up"}
                />  
                
                <Error label={error}/>
                <BottomWarning label={"Already Signed Up?"} buttonText={"Sign In"} to={"/signin"}/>
            </div>
        </div>
        
        </motion.div>
        </>
    )
} 