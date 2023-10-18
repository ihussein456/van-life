import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";

function VanDetailHost() {
    const params = useParams()
    const [vanDetail, setVanDetail] = useState("")

    useEffect(()=> {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVanDetail(data.vans)

            })
    }, [params.id])

    const activeStyling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    /*    
    description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
    id: "1"
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
    name: "Modest Explorer"
    price: 60
    type: "simple"
*/


    return ( 
        <div>
            <Link to="../vans">Back to dashboard</Link>

            <div>
            { vanDetail?
                    
                (<div>
                    <img src={vanDetail.imageUrl}alt="" />
                    <div>
                        <p>{vanDetail.type}</p>
                        <h1>{vanDetail.name}</h1>
                        <p><span className="bold">{vanDetail.price}</span>/day</p>
                    </div>
                    <nav>
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
                </div>) 
                :
                (<h1>Loading...</h1>)
            }
            </div>
        </div>
     );
}

export default VanDetailHost;