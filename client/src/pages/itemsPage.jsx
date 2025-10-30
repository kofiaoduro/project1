import { useParams } from "react-router-dom"
import Section from "../components/main/section"
import ItemCard from "../components/main/itemsCard"
const Itemspage = ({items})=>{
    const { id } = useParams()
    console.log(id)
   // console.log(items[id])
    return(
        <section className="w-11/12 m-auto mt-4">
            <ItemCard 
                items = {items[id]}
            />
        </section>
    )
}

export default Itemspage