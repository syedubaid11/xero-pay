import { useState } from "react";
import { useEffect } from "react";
import { Heading } from "../components/heading";
import { InputBox } from "../components/input";
import { BottomWarning } from "../components/bottomwarning";
import { SubHeading } from "../components/subheading";
import { Top } from "../components/top";
import axios from "axios"
import { Button } from "../components/button";

export const Signup=()=>{
    const[firstName,setfirstName]=useState('')
    const[lastName,setlastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[username,setUsername]=useState('')
  
    return(
        <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-120  ">
            <Top label={"xero Pay"}/>
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an Account"}/>
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
            <Button label={"Sign Up"}/>
        </div>
        

        
        
        </div>
    )
} 