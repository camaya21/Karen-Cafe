import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Nav = () => {

    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <p className="text-[#13cee7]">Karen Cafe</p>
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm'>Home</li>
                    </Link>
                    <Link to="/menu">
                        <li className='ml-10 text-sm'>Menu</li>
                    </Link>
                    <Link to="/Order">
                        <li className='ml-10 text-sm'>Order</li>
                    </Link>
                    <Link to="/Location">
                        <li className='ml-10 text-sm'>Location</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav;