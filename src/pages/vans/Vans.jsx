import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
    const [vans, setVans] = useState([])
    const [vanLoad, setVanLoad] = useState(null)

    useEffect(() => {
        fetch("/api/vans")
          .then((res) => res.json())
          .then((data) => {
            setVans(data.vans)
            setVanLoad(data.vans)
        });
      }, []);
    
    const vanElements = vans.map(van => (
        <div key= {van.id} className="van-title">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="" />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return ( 
        <div>
            <div className="van-container">
            <h1>Explore our van options</h1>

                {vanLoad? (
                <div className="vans">
                    {vanElements}
                </div>) : <h2>Loading...</h2>}
            </div>
        </div>
     );
}

export default Vans;