
import Section from "./components/main/section"
import data from "./data.json"
import Itemspage from "./pages/itemsPage"
import Getstarted from "./pages/getStarted"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import items from "./items.json"
import DefaultLayout from "./components/defaullayout"
function App() {
  console.log(data.featured)
  console.log(data.featuredEntrees)
  const [showSideNav, setSideNav] = useState(false)
  console.log(showSideNav)
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout 
            setSideNav={setSideNav}
            showSideNav={showSideNav}
        />}>

          <Route path="/" element={<Section cardData = {data.featured} featuredEntrees={data.featuredEntrees}/>} />
          <Route path="/menu/:id" element={<Itemspage items={items}/>} />
          <Route path="/order/getstarted" element={<Getstarted /> }/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
