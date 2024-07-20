import { AuroraBackground } from "../components/aurora-background";
import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";


export const Home=()=>{
    const navigate=useNavigate();
    return(
        <>
        <AuroraBackground>
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
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
        </motion.div>
        </AuroraBackground>
  

        </>

    )
}