import { InputBox } from "../components/input"
import { useSearchParams } from "react-router-dom"
import { ButtonDashboard } from "../components/button-dashboard";

export const Pay=()=>{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name");
    return(
        <>
        <div className="flex justify-center items-center w-50  min-h-screen">
            
            <div className="flex flex-col justify-center items-center h-80 border-2 p-10 rounded-2xl">

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
                
                <div className="flex justify-center  p-4">
                  
                </div>

                  
                   
            </div>

        </div>

        </>

    )
}