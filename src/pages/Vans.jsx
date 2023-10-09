import { useEffect, useState } from "react";

function Vans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            
        });
      }, []);
    

    return ( 
        <div>
            <h1>Vans go here</h1>
        </div>
     );
}

export default Vans;