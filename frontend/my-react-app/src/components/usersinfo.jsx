export default function Card(props){
    return(
        <div className="flex justify between ">
            <div className="ml-4">
             <p>{props.name}</p>
            </div>
            <div className="mr-4">
             <p>{props.balance}</p>
            </div>
        </div>
    )
}