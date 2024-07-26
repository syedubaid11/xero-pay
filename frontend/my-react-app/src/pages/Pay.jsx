import { InputBox } from "../components/input"
import { useSearchParams } from "react-router-dom"
import { ButtonDashboard } from "../components/button-dashboard";
import {motion} from "framer-motion"
import { Top } from "../components/top";


export const Pay=()=>{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name");
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
        <Top label={"xero pay"}/>

        <div className="flex justify-center items-center w-50  min-h-screen">
            <div className="flex flex-col justify-center items-center h-80 border-2 p-10 rounded-2xl mb-40">
                <div className="mb-20">
                    <p>Name: {name}</p>
                </div>
                <div className="flex ">
                    <InputBox label={"Enter the amount"} />
                        <div className="mt-9 ml-4">
                            <ButtonDashboard onClick={(e)=>{
                                axios.post
                            }}label={"Pay"}/>
                        </div>
                </div>
                
            </div>

        </div>
        </motion.div>

        </>

    )
}

//state changes as the user inputs the numbers and then we call the backend request to post the money into the users account