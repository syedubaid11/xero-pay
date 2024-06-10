import { useState } from "react"
import { Top } from "../components/top"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subheading"
import { InputBox } from "../components/input"
import { Button } from "../components/button"
import { BottomWarning } from "../components/bottomwarning"


export const Signin=()=>{
    const[password,setPassword]=useState('')
    const[email,setemail]=useState('')
    return(
        
        <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-120  ">
            <Top label={"xero Pay"}/>
            <Heading label={"Sign In"}/>
            
            <InputBox onChange={e=>{
                setEmail(e.target.value)
            }}label={"Enter your Email"}placeholder={"Email"} />
            <InputBox onChange={e=>{
                setPassword(e.target.value)
            }} label={"Enter your Password"}placeholder={"Password"} />
            <Button label={"Sign In "}/>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>

        </div>
    )
}