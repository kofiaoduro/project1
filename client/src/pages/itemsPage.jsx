import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Section from "../components/main/section"
import ItemCard from "../components/main/itemsCard"
const Itemspage = ({items})=>{
    const { id } = useParams()
    const [categoryItems, setCategoryItems ] = useState([])
    console.log(id)
   // console.log(items)
    const getProducts = async ()=>{
        try {
            const data = await fetch(`http://localhost:3000/menu/${id}`)
            const res = await data.json()
            if(res.status === 'Ok' && res.items){
                setCategoryItems(res.items)
            }
            console.log('hi')
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getProducts()
    },[id])
    return(
        <section className="w-11/12 m-auto mt-4">
            <ItemCard 
                items = {categoryItems}
            />
        </section>
    )
}

export default Itemspage