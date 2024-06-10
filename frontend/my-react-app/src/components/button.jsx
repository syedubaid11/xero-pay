export function Button({onClick,label}){
    return(
        <>
        <button onClick={onClick} className="my-5 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:shadow-none">{label}</button>
        </>
    )
}