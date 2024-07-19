import { Button } from "../components/button"
import { Navigate, useNavigate } from "react-router-dom"


export const Home=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex items-center justify-center w-screen h-screen border-4">

        <div className="flex-col">

            <div className="flex justify-center text-6xl font-extralight border-4 mb-20">
                xero pay
            </div>

            <div className="flex justify-center border-4 mt-5 text-2xl">
                <div className="mr-4">
                 <Button label={"Sign Up"} onClick={navigate("/Signup")}/>
                </div>
                <Button label={"Sign In"}/>
            </div>  
        </div>    

        </div>   

    )
}