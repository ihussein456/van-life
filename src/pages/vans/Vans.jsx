import { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api.js" 

export function loader(){
    return getVans()     //Loads the data instead of useEffect W
}

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams() //Used to filter through the content
    const vans = useLoaderData() // Loader data saved in the vans variable
    const typeFilter = searchParams.get("type")  //Gets the type of the van for search param
   
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)    //Allows us to filter through the vans 
        : vans
    
    const vanElements = displayedVans.map(van => (
        <div key= {van.id} className="van-title">
            <Link to={`./${van.id}`} state={{search: typeFilter}}>
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
            <div className="van-buttons">
                <button 
                    className={`van-type luxury ${typeFilter ==="luxury"? "selected": ""}`}
                    onClick={() => setSearchParams({type: "luxury"})}
                    >Luxury
                </button>
                <button 
                    className={`van-type simple ${typeFilter ==="simple"? "selected": ""}`}
                    onClick={() => setSearchParams({type: "simple"})}
                    >Simple
                </button>
                <button 
                    className={`van-type rugged ${typeFilter ==="rugged"? "selected": ""}`}
                    onClick={() => setSearchParams({type: "rugged"})}
                    >Rugged
                </button>
                {typeFilter? 
                    (<button 
                        className="van-type clear-filters"
                        onClick={() => setSearchParams({})}
                        >Clear Filter
                    </button>) 
                    : null
                }

            </div>

                <div className="vans">
                    {vanElements}
                </div>
            </div>
        </div>
     );
}

export default Vans;