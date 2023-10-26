import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getVanDetail } from "../../api";


export function loader({params}){
    return getVanDetail(params)
}

function VanDetail() {
    //const [vanInfo, setVanInfo] = useState(null)
    const location = useLocation()

    const vanInfo = useLoaderData()


    
    return ( 
        <div className="van-container">
            <h1>Van Detail goes here</h1>
            <Link 
            to={location.state.search? `/vans?type=${location.state.search}` : "/vans"}

            > &larr; Back to {location.state.search? location.state.search: "all"} vans
            </Link>
            {vanInfo? (
            <div>
                <img className="van-info-img" src={vanInfo.imageUrl} alt="" />
                <div className="van-info">
                    <i className={`van-type ${vanInfo.type} selected`}>{vanInfo.type}</i>
                    <h2>{vanInfo.name}</h2>
                    <p><span className="bold">${vanInfo.price}</span>/day</p>
                    <p>{vanInfo.description}</p>
                    <button className="button">Rent this Van</button>
                </div>
            </div>): <h2>Loading...</h2>}
        </div>
     );
}

export default VanDetail;