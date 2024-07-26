export default function Usersinfo(props){
    return(
        <div className="flex mt-5 font-light justify-between text-xl ">

            <div className="flex">

                <div class="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ml-2">
                    <span class="font-medium text-gray-600 dark:text-gray-300">{props.name[0]}</span>
                </div>

                <div className="flex col ml-4 mt-1">
                  <p>{props.name}</p>
                </div>
                
            </div>

            <div className="flex flex-end mr-12   px-3 py-1 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:shadow-none ">
               <button>Pay</button>
            </div>


        </div>
    )
}