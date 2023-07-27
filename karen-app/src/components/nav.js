import { Link } from "react-router-dom";

const Nav = () => {
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
        </div>
    )
}

export default Nav;