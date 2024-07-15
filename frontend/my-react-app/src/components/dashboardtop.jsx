export const Dashboardtop=({balance})=>{
    return(
        <div className="flex justify-between">
            <div className="flex justify-start mt-7 ml-4 font-medium text-3xl ">
                User-{balance}
            </div>
            <div className="flex">
                <div className="flex justify-end mr-5 text-2xl border-2  ">
                   <button>Pay</button>
                </div>
            </div>
        </div>
    )
}