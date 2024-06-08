import { useState } from "react";
import { useEffect } from "react";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { BottomWarning } from "../components/bottomwarning";
import {axios} from "axios"

export const Signup=()=>{
    const[firstName,setfirstName]=useState('')
    const[lastName,setlastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
  
    return(
        <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-80 ">
            <Heading label={"Sign Up"}/>
            <Subheading label={"Enter your information to create an Account"}/>
            
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
        
            <button onClick={
                axios.post("https://localhost:3000/api/v1/user/signup",{
                    username:username,
                    firstName:firstName,
                    lastName:lastName,
                    password:password
                })
            }type="button" className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>

        
        
        </div>
    )
} 