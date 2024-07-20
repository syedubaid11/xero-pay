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

            <div className="text-3xl mb-6 border-b-2">Seamless Payments , Simplified Life</div>            

            <div className="flex justify-center  mt-5 text-2xl">
                <div className="mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70  duration-300 ...">
                 <Button label={"Sign Up"} onClick={async()=>{navigate("/Signup")}}/>
                </div>
                <div className="mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70  duration-300 ...">
                  <Button label={"Sign In"} onClick={async()=>{navigate("/Signin")}}/>
                </div>
            </div>  
        </div>    

        </div>   

    )
}