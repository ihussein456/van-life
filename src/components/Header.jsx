import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div className="navbar">
            <h1><Link to="./">#VANLIFE</Link></h1>
            <div className="navbar-links">
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </div>
     );
}

export default Header;