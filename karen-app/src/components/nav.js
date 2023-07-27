import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <p className="text-[#13cee7]">Karen Cafe</p>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/menu">
                <p>Menu</p>
            </Link>
        </div>
    )
}

export default Nav;