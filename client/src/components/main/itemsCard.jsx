import { Link } from "react-router-dom"
const ItemCard = ({items})=>{
    console.log(items)
    return(
        <div className="flex flex-col md:grid grid-cols-3 gap-3">
            {items.map((Element)=>(
                <div key={Element.id} className=" md:w-full">
                    <img src={`/images/${Element.image}`} className="w-full h-[200px] object-cover"/>
                    <div className="flex justify-between mt-4">
                        <div>
                            <p>{Element.name}</p>
                            <p>{Element.calories} Cal per Serving</p>
                        </div>
                        <Link to={'/order/getstarted'} className=" bg-red-600 flex flex-col justify-center p-2 rounded-3xl hover:bg-red-800 shadow-md"><p className="text-white">Order now</p></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemCard