import { useOutletContext } from "react-router";


function HostVanInfo() {

    const vanDetail = useOutletContext()

    return ( 
        <div className="host-van-info">
            <h4>Name: <span className="soft">{vanDetail.name}</span></h4>
            <h4>Category: <span className="soft">{vanDetail.type}</span></h4>
            <h4>Description: <span className="soft">{vanDetail.description}</span></h4>
            <h4>Visibility: <span className="soft">Public</span></h4>
        </div>
     );
}

export default HostVanInfo;