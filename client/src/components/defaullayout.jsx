import Nav from "./nav/nav"
import NavLinks from "./nav/navlinks"
import SideMenu from "./nav/sideMenu"
import { Outlet } from "react-router-dom"

const DefaultLayout = ({ setSideNav, showSideNav }) => {
    return (
        <div className="wrapper">
            <header className="border-b-gray-300 border-b">
                <Nav 
                    setSideNav={setSideNav}
                    showSideNav={showSideNav}
                />
            </header>

            <NavLinks />

            <main className={showSideNav ? "relative overflow-y-hidden" : "border-b-black border-2 relative"}>
                <SideMenu 
                    showSideNav={showSideNav}
                    setSideNav={setSideNav}
                />

                {/* ✅ This renders the page for the active route */}
                <Outlet />
            </main>

            <footer className="border-green-400 border">footer</footer>
        </div>
    )
}

export default DefaultLayout
