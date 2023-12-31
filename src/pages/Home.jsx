import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
    return ( 
        <div>
            <div className="hero">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/Vans" className="button">Find your van</Link>
            </div>
        </div>
     );
}

export default Home;