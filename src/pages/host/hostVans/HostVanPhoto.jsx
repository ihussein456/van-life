import { useOutletContext } from "react-router";


function HostVanPhoto() {

    const vanDetail = useOutletContext()
    return ( 
        <div>
            <img className="host-van-img2" src={vanDetail.imageUrl} alt="" />
        </div>
     );
}

export default HostVanPhoto;