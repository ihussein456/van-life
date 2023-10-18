import { useOutletContext } from "react-router";


function HostVanPhoto() {

    const vanDetail = useOutletContext()
    return ( 
        <div>
            <img src={vanDetail.imageUrl} alt="" />
        </div>
     );
}

export default HostVanPhoto;