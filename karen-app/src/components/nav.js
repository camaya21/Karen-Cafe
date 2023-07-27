import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Nav = () => {

    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="">
            <p className="text-[#13cee7]">Karen Cafe</p>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/menu">
                <p>Menu</p>
            </Link>
            <Link to="/Order">
                <p>Place an Order</p>
            </Link>
            <Link to="/Location">
                <p>Location</p>
            </Link>
        </div>
    )
}

export default Nav;