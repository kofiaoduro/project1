import Card from "./card";
const Section = ({cardData, featuredEntrees})=>{
    console.log(cardData)
    return(
        <section className="w-11/12 m-auto ">
            <div className="text-center py-4">
                <h4>Chick-fil-A Menu</h4>
                <p className="">Price and availability may very by location</p>
            </div>
            <div>
                <Card 
                    cardData={cardData}
                    featuredEntrees={featuredEntrees}
                />
            </div>
        </section>
    )
}

export default Section;