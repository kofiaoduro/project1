import { Link } from "react-router-dom";
const SideMenu = ({showSideNav, setSideNav})=>{
    const sideMenuLinks = [
        { id: 1, name: 'Menu', path: '/'}, {id: 2, name: 'Stories', path: '/menu/stories'},{id: 3, name: 'About', path: '/'},{id: 4, name: 'Careers', path: '/'}
    ]
    return(
        <div className={showSideNav? "absolute left-0 border-2 border-amber-400 w-full top-0 min-h-lvh bg-white": "hidden"}>
            <div className="w-11/12 m-auto flex flex-col">
                 <div className="sideMenu-links py-4">
                       {sideMenuLinks.map((Element)=>(
                        <Link to={`${Element.path}`} onClick={()=>setSideNav(!showSideNav)} key={Element.id}>{Element.name}</Link>
                       ))}
                </div>
                <div className="sideMenu-buttons flex flex-col gap-4">
                    <Link to={''} className="border  p-4 rounded-3xl text-center hover:bg-red-200">Order Now</Link>
                    <Link to={''} className="border  p-4 rounded-3xl text-center">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;