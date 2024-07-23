export default function Usersinfo(props){
    return(
        <div className="flex mt-5 font-light justify-between text-xl ">
            <div className="flex col ml-6">
             <p>{props.name}</p>
            </div>
            <div className="flex flex-end mr-12   px-3 py-1 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:shadow-none ">
             <button>Pay</button>
            </div>
        </div>
    )
}