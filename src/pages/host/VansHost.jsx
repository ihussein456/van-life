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
        <div key={van.id}>
            <Link to={`${van.id}`}>
                <img src={van.imageUrl}/>
                <div>
                    <h1>{van.name}</h1>
                    <p>{van.price}</p>
                </div>
            </Link>

        </div>
    ))

    return ( 
        <div>
            <h1>Your Listed Vans</h1>
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