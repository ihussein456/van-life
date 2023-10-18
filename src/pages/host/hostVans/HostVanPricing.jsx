import { useOutletContext } from "react-router";



function HostVanReview() {

    const vanDetail = useOutletContext()

    return ( 
        <div>
            <p>£<span className="bold">{vanDetail.price}</span>/day</p>
        </div>
     );
}

export default HostVanReview;