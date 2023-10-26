import { useEffect, useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { getVanHostDetail } from "../../api";

export function loader({params}){
    return getVanHostDetail(params)
}

function VanDetailHost() {
    //const params = useParams()
    //const [vanDetail, setVanDetail] = useState("")

    const vanDetail = useLoaderData()

    const activeStyling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }



    return ( 
        <div className="van-container">
            <Link to="../vans"> &larr; Back to dashboard</Link>

            <div>
            
                    
                <div className="host-van2">
                    <div className="host-van-flex">
                        <img className="host-van-img2" src={vanDetail.imageUrl}alt="" />
                        <div>
                        <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
                            <h3>{vanDetail.name}</h3>
                            <p><span className="bold">£{vanDetail.price}</span>/day</p>
                        </div>
                    </div>
                    <nav className="host-info-nav">
                        <NavLink 
                            to=""
                            end  //for First index element so doesnt break css
                            style={({isActive}) => isActive? activeStyling : null}
                        >Details</NavLink>

                        <NavLink
                            to="pricing"
                            style={({isActive}) => isActive? activeStyling : null}
                        >Pricing</NavLink>

                        <NavLink
                            to="photos"
                            style={({isActive}) => isActive? activeStyling : null}
                        >Photos</NavLink>
                        
                    </nav>
                    <Outlet context={vanDetail}/>
                </div>
                
            </div>
        </div>
     );
}

export default VanDetailHost;