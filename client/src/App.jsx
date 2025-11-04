
import Section from "./components/main/section"
import data from "./data.json"
import Itemspage from "./pages/itemsPage"
import Getstarted from "./pages/getStarted"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import items from "./items.json"
import DefaultLayout from "./components/defaullayout"

function App() {
 // console.log(data.featured)
 //console.log(data.featuredEntrees)
  const [showSideNav, setSideNav] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [secondaryProducts, setSecondaryProducts] = useState([])
 // console.log(showSideNav)

  const getFeature = async ()=>{
    try {
      const data = await fetch('http://localhost:3000/menu')
      const res = await data.json()
      if(res.status = 200){
        setFeaturedProducts(res.items)
        setSecondaryProducts(res.secondaryFeature)
      }
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=>{
      getFeature()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout 
            setSideNav={setSideNav}
            showSideNav={showSideNav}
        />}>

          <Route path="/" element={<Section cardData = {featuredProducts} featuredEntrees={data.featuredEntrees}  secondaryProducts={ secondaryProducts}/>} />
          <Route path="/menu/:id" element={<Itemspage items={items}/>} />
          <Route path="/order/getstarted" element={<Getstarted /> }/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
