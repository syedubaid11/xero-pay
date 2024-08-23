import { AuroraBackground } from "../components/aurora-background";
import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";


export const Home=()=>{
    const navigate=useNavigate();
    return(
        <div className="p-0 m-0 h-screen w-screen">
          
        <AuroraBackground>
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    

        <div className="flex flex-col justify-center items-center">

            <div className="flex justify-center text-5xl font-extralight md:text-6xl mb-20">
                xero pay
            </div>

            <div className="flex justify-center text-xl md:text-2xl font-extralight whitespace-nowrap mb-6 border-b-2">Seamless Payments , Simplified Life</div>            

            <div className="flex justify-center  mt-5 text-2xl">
                <div className="font-extralight mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70  duration-300 ...">
                 <Button label={"Sign Up"} onClick={async()=>{navigate("/Signup")}}/>
                </div>
                <div className="font-extralight mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70  duration-300 ...">
                  <Button label={"Sign In"} onClick={async()=>{navigate("/Signin")}}/>
                </div>
            </div>  
        </div>    

        </motion.div>
        </AuroraBackground>
        </div>

    )
}