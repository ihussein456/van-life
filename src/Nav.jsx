import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <div className="navbar">
            <h1><Link to="./">#VANLIFE</Link></h1>
            <div className="navbar-links">
                <Link to="/About">About</Link>
                <Link to="/Vans">Vans</Link>
            </div>
        </div>
     );
}

export default Nav;