import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function VansHost() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
          .then((res) => res.json())
          .then((data) => {
            setVans(data.vans)
        });
      }, []);

    const vanElements = vans.map(van => (
        <div className="host-van2" key={van.id}>
            <Link className="host-van-flex" to={`${van.id}`}>
                <img className="host-van-img" src={van.imageUrl}/>
                <div>
                    <h4>{van.name}</h4>
                    <p>£{van.price}/day</p>
                </div>
            </Link>

        </div>
    ))

    return ( 
        <div className="van-container">
            <h2>Your Listed Vans</h2>
            {vans.length > 0 ?
               ( <div>
                    {vanElements}
                </div> )
               :
               ( <h1>Loading...</h1>)
            }
        </div>
     );
}

export default VansHost;