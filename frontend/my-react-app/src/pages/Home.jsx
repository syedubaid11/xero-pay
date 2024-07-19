import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"


export const Home=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex items-center justify-center w-screen h-screen ">

        <div className="flex-col">

            <div className="flex justify-center text-6xl font-extralight  mb-20">
                xero pay
            </div>

            <div className="text-3xl mb-6">Seamless Payments , Simplified Life</div>            

            <div className="flex justify-center  mt-5 text-2xl">
                <div className="mr-4">
                 <Button label={"Sign Up"} onClick={async()=>{navigate("/Signup")}}/>
                </div>
                <Button label={"Sign In"} onClick={async()=>{navigate("/Signin")}}/>
            </div>  
        </div>    

        </div>   

    )
}