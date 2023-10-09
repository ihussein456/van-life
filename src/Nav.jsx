import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <div className="navbar">
            <h1>#VANLIFE</h1>
            <div className="navbar-links">
                <Link to="/About">About</Link>
                <Link to="/">Vans</Link>
            </div>
        </div>
     );
}

export default Nav;