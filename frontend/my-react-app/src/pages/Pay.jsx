import { InputBox } from "../components/input"
import { useSearchParams } from "react-router-dom"
import { ButtonDashboard } from "../components/button-dashboard";
import {motion} from "framer-motion"
import { Top } from "../components/top";
import { useState } from "react";
import axios from "axios";


export const Pay=()=>{
    const [searchParams]=useSearchParams();
    const recipient=searchParams.get("id");
    const name=searchParams.get("name");
    const sender=searchParams.get("sid")
    const[amount,setAmount]=useState([])
    const[error,setError]=useState("")
    console.log(amount)

    console.log(sender)

    const handleChange=(e)=>{
        if(e.target.value>10000){
            setError("Amount cannot be more than 10000!")
        }
        else {
            setAmount(e.target.value)
            setError("")
        }
    }
    return(
        <div className="h-screeen w-screen">
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          ease: "easeInOut",
        }}
        >
        <Top label={"xero pay"}/>

        <div className="flex justify-center items-center w-50">
            <div className="flex flex-col justify-center items-center h-80 border-2 p-10 rounded-2xl mb-40 h-30 w-50 mt-40">
                <div className="mb-20">
                    <p>Transferring to:{name}</p>
                </div>
                <div className="flex ">
                    <InputBox onChange={handleChange}label={"Enter the amount"} />
                        <div className="mt-9 ml-4">
                            <ButtonDashboard onClick={(e)=>{
                                axios.put(`https://xero-pay-backend.vercel.app/user/account`,{
                                    //senderId:id,
                                    recipientId:recipient,
                                    senderId:sender,
                                    amount:amount
                                })
                                .then(console.log("Balance has been added successfully"))
                                .catch((error)=>{
                                    console.log(`Error while transferring${error}`)
                                })
                                
                            }}label={"Pay"}/>
                        </div>
                
                </div>

                <div className="mt-10 text-red-800">
                    {error}
                </div>
                
            </div>

        </div>
        </motion.div>

        </div>

    )
}

//state changes as the user inputs the numbers and then we call the backend request to post the money into the users account