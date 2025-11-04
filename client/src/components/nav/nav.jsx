import { HiBars3 } from 'react-icons/hi2';
import { SiKfc } from 'react-icons/si';
import { HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
const Nav = ({ setSideNav, showSideNav})=>{
   // console.log(showSideNav)
    return(
        <div className='flex justify-between items-center w-11/12 m-auto py-4 '>
            {showSideNav ? (<HiXMark size={40} style={{ color: '#E51636' }} onClick={()=>setSideNav(!showSideNav)} className='md:hidden'/>):(<HiBars3 size={40} style={{ color: '#E51636' }} onClick={()=>setSideNav(!showSideNav)} className='md:hidden'/>)}
            <SiKfc size={40} style={{ color: '#E51636' }} />
            <div className='hidden md:grid grid-cols-4'>
                <Link to={''}>Menu</Link>
                <Link to={''}>Stories</Link>
                <Link to={''}>About</Link>
                <Link to={''}>Careers</Link>
            </div>
            <a href='/' style={{color: '#E51636'}} className='font-bold'>Order Now</a>
        </div>
    )
}
export default Nav;