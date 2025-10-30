const FeaturedCard = ({featuredEntrees})=>{
    return(
        <div className="">
            {featuredEntrees.map((Element)=>(
                <div key={Element.id} className="grid grid-cols-2 gap-4 mb-4">
                    <img src={Element.image} className="w-[100%] h-[200px] object-cover"></img>
                    <div className="featuredCard-content self-center">
                        <p className="mb-4">{Element.description}</p>
                        <button className="border-gray-200 border-1 p-3 rounded-4xl">Order Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedCard