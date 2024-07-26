export default function Usersinfo(props){
    return(
        <div className="flex mt-5 font-light justify-between text-xl ">

            <div className="flex">

                <div className="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ml-4">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{props.name[0]}</span>
                </div>

                <div className="flex col ml-4 mt-1">
                  <p>{props.name}</p>
                </div>
                
            </div>
        </div>
    )
}