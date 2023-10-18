import { NavLink } from "react-router-dom";

function Header() {
    const activeStyling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return ( 
        <div className="navbar">
            <h1><NavLink to="./">#VANLIFE</NavLink></h1>
            <div className="navbar-links">
                <NavLink 
                to="/host"
                style={({isActive}) => isActive? activeStyling : null}
                >Host
                </NavLink>

                <NavLink 
                to="/about"
                style={({isActive}) => isActive? activeStyling : null}
                >About
                </NavLink>

                <NavLink 
                to="/vans"
                style={({isActive}) => isActive? activeStyling : null}
                >Vans
                </NavLink>
            </div>
        </div>
     );
}

export default Header;