import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function HostLayout() {
    const activeStyling = {
            fontWeight: "bold",
            textDecoration: "underline",
            color: "#161616"
        }

    return ( 
        <div>
            <nav>
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive? activeStyling : null}
                >Dashboard
                </NavLink>

                <NavLink 
                    to="income"
                    style={({isActive}) => isActive? activeStyling : null}
                >Income
                </NavLink>

                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive? activeStyling : null}
                >Vans
                </NavLink>

                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive? activeStyling : null}
                >Reviews
                </NavLink>
                
            </nav>
            <Outlet/>

        </div>
     );
}

export default HostLayout;