import { Users } from "./users"
export const Dashboardtop=({balance})=>{
    return(
        <>
        <div className="flex">
            <div className="flex justify-start mt-7 ml-4 font-extralight text-2xl ">
                Balance :
                <div className="font-light">
                  {balance}
                 </div>
            </div>
            
        </div>

        <div className="flex justify-between">
            <div className="flex justify-start mt-20 ml-4 font-extralight text-3xl ">
                Users
            </div>

            <div className="flex justify-end mt-20 mr-12 font-extralight text-3xl ">
                Pay
            </div>
            
        </div>
        </>
    )
}