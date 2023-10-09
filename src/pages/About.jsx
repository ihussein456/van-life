import Footer from "./Footer";
import img from "../assets/About-img.jpg"

function About() {
    return ( 
        <div>
            <img src={img} alt="" />
            <div className="about">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <br />
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="about-explore">
                    <h3>Your destination is waiting.</h3> 
                    <h3>Your van is waiting.</h3>
                    <button>Explore our vans</button>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default About;