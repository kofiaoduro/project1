import { Link } from "react-router-dom"
const NavLinks = ()=>{
    return(
        <div className="hidden md:block py-4  w-11/12 m-auto">
            <ul>
                <Link to={'/menu/Breakfast'}>Breakfast</Link>
                <Link to={'/menu/Entrees'}>Entrees</Link>
                <Link to={'/menu/Salads'}>Salads</Link>
                <Link to={'/menu/Sides'}>Sides</Link>
                <Link to={'/menu/Kids'}>Kid's Meals</Link>
                <Link to={'/menu/Treats'}>Treats</Link>
                <Link to={'/menu/Beverages'}>Beverages</Link>
            </ul>
        </div>
    )
}


export default NavLinks