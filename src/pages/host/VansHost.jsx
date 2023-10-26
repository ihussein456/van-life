import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getVanHost } from "../../api";

export function loader(){
    return getVanHost()
}

function VansHost() {
    //const [vans, setVans] = useState([])

    const vans = useLoaderData()
    

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
                <div>
                    {vanElements}
                </div> 
        </div>
     );
}

export default VansHost;