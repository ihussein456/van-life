import { useOutletContext } from "react-router";


function HostVanInfo() {

    const vanDetail = useOutletContext()

    return ( 
        <div>
            <h4>Name: <span>{vanDetail.name}</span></h4>
            <h4>Category: <span>{vanDetail.type}</span></h4>
            <h4>Description: <span>{vanDetail.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </div>
     );
}

export default HostVanInfo;