export const Dashboardtop=({balance})=>{
    return(
        <div className="flex ">
            <div className="flex justify-start mt-7 ml-4 font-medium text-3xl">
                Balance{balance}
            </div>

            <div className="flex justify end">
                <button>Pay</button>
            </div>
        </div>
    )
}