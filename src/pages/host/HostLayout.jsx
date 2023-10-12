import { Outlet } from "react-router";
import { Link } from "react-router-dom";
function HostLayout() {
    return ( 
        <div>
            <div>
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </div>
            <Outlet/>

        </div>
     );
}

export default HostLayout;