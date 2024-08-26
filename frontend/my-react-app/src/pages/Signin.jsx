import { useState } from "react"
import { Top } from "../components/top"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subheading"
import { InputBox } from "../components/input"
import { Button } from "../components/button"
import { BottomWarning } from "../components/bottomwarning"
import { motion } from "framer-motion"
import { Navigate, useNavigate } from "react-router-dom"
import { Error } from "../components/error"
import axios from "axios"


export const Signin=()=>{
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
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
        <div className="flex flex-col items-center justify-center w-120  ">
            
            <Heading label={"Sign In"}/>
            
            <InputBox onChange={e=>{
                setEmail(e.target.value)
            }}label={"Enter your Email"}placeholder={"Email"} />
            <InputBox onChange={e=>{
                setPassword(e.target.value)
            }} label={"Enter your Password"}placeholder={"Password"} />
            <Button label={"Sign In "} onClick={async()=>{
                try{
                    const response=await axios.post("http://localhost:3000/user/signin",{
                        password,
                        email
                    })
                    if(response.status==200){
                        const token=response.data.token
                        const userId=response.data.userId
                        localStorage.setItem("token",token)
                        navigate(`/dashboard/sid=${userId}`)
                    }
                }
                catch(error){
                    setError("Invalid email or password")
                }
               

            }}/>
            <Error label={error}/>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>

        </div>
        </motion.div>

        </>
    )
}