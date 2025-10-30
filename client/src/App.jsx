import Nav from "./components/nav/nav"
import Section from "./components/main/section"
import data from "./data.json"
import NavLinks from "./components/nav/navlinks"
import SideMenu from "./components/nav/sideMenu"
import Itemspage from "./pages/itemsPage"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import items from "./items.json"
function App() {
  console.log(data.featured)
  console.log(data.featuredEntrees)
  const [showSideNav, setSideNav] = useState(false)
  console.log(showSideNav)
  return (
    <div className="App">
      <div className="wrapper">
        <header className="border-b-gray-300 border-1 ">
          <Nav 
            setSideNav={setSideNav}
            showSideNav={showSideNav}
          />
        </header>
        <NavLinks />
        <main className={showSideNav ? "relative overflow-y-hidden": "border-b-black border-2 relative"}>
           <SideMenu 
              showSideNav={showSideNav}
              setSideNav={setSideNav}
          />
            <Routes>
              <Route path="/" element={<Section 
                  cardData = {data.featured}
                  featuredEntrees={data.featuredEntrees}
              />} />
              <Route path="/menu/:id" element={<Itemspage 
                items={items}
              />} />
            </Routes>
        </main>
        <footer className="border-green-400 border">footer</footer>
      </div>
    </div>
  )
}

export default App
