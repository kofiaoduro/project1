import { TbTruckDelivery } from 'react-icons/tb';
import { TbBuildingStore } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Getstarted = ()=>{
    
    const getStartedCard = [
        {name: 'Pickup', description: 'Drive-thru, carry-out, curbside, or dine-in', Image: TbBuildingStore},  {name: 'Delivery', description: 'From select restaurants and delivery partners', Image: TbTruckDelivery},  {name: 'Catering', description: '', Image: MdOutlineFastfood }
    ]
    return(
        <section className="w-11/12 m-auto lg:w-screen ">
                <div className="flex flex-col  lg:flex-row p-0">
                    {/* Background image */}
                    <div
                        className="hidden lg:block w-full  flex-1"
                        style={{
                            backgroundImage: "url('/images/kfc.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh", // height on mobile,
                        }}
                        >
                    </div>
                        {/* Cards */}
                    <div className="flex flex-col gap-4  flex-1 justify-center">
                        <h3 className="text-blue-700 text-2xl text-center">What type of order can we get started for you?</h3>
                        {getStartedCard.map((Element, idx) => (
                            <Link key={idx} to="/" style={{ color: "black", border: "none" }}>
                            <div
                                className="p-5 max-w-[320px] mx-auto rounded-2xl flex justify-between hover:border border-red-600 cursor-pointer"
                                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                            >
                                <Element.Image className="text-4xl flex-1" />
                                <div className="flex-2">
                                <p className="text-red-600">{Element.name}</p>
                                <p className="text-xs">{Element.description}</p>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
        </section>
    )
}

export default Getstarted