export default function Usersinfo(props){
    return(
        <div className="flex mt-5 font-light justify-between text-xl ">
            <div className="flex col ml-6">
             <p>{props.name}</p>
            </div>
            <div className="flex flex-end mr-12 border-2">
             <button>Pay</button>
            </div>
        </div>
    )
}