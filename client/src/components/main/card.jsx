import FeaturedCard from "./featuredCard"
import { useEffect } from "react"
const Card = ({cardData, featuredEntrees,  secondaryProducts})=>{
   
    console.log(featuredEntrees)
    console.log(secondaryProducts)
    return(
        <div className="grid grid-cols-3 gap-4">
            {cardData.map((Element)=>(
                <div key={Element.id} className="col-span-full gap-4 md:grid grid-cols-2 auto-rows-[600px]">
                    <img src={`/images/${Element.image}`} className="h-[200px] w-full object-cover rounded-2xl md:h-[600px]"></img>
                    <div className="py-2 overflow-y-scroll self-center">
                        <div className="card-content mb-4">
                            <h4>{Element.name}</h4>
                            <p>{Element.description}</p>
                        </div>
                        <FeaturedCard 
                            featuredEntrees={featuredEntrees}
                            name={Element.category}
                            secondaryProducts={ secondaryProducts}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Card