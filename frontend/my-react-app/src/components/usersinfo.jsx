export default function Usersinfo(props){
    return(
        <div className="flex mt-5 font-bold justify between ">
            <div className="flex col ml-6">
             <p>{props.name}</p>
            </div>
            <div className="mr-4">
             <p>{props.balance}</p>
            </div>
        </div>
    )
}