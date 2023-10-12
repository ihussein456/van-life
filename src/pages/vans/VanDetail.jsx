import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function VanDetail() {

    const [vanInfo, setVanInfo] = useState(null)

    const params = useParams()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVanInfo(data.vans)
            })
    }, [params.id])
    
    return ( 
        <div className="van-container">
            <h1>Van Detail goes here</h1>
            <Link to="/Vans">Back to all vans</Link>
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