import Mountaint1 from "../assest/1.jpg"
import Mountaint2 from "../assest/2.jpg"
import Mountaint3 from "../assest/3.jpg"
import Mountaint4 from "../assest/4.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyle.css"
const Destination=()=>{
    return(
        <div className="destination">
            <h1> Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            <DestinationData
             className="first-des"
             heading="Taal volcano, Batangas"
             text="Taal Volcano, located in Batangas, Philippines, is one of the world's smallest active volcanoes, sitting within Taal Lake. Known for its picturesque beauty, it attracts tourists for trekking and scenic views, especially from Tagaytay City. Despite its charm, Taal is highly active, with over 30 recorded eruptions, the latest in January 2020, causing ashfall and evacuations. It is closely monitored due to its proximity to populated areas, making it both a natural wonder and a significant volcanic hazard."
            img1={Mountaint1}
            img2={Mountaint2}
            />

           <DestinationData
           className="first-des-reverse"
             heading="Mt.Daguldul, Batangas"
             text="Mt. Daguldul is a popular hiking destination located in San Juan, Batangas, Philippines. Known for its beginner-friendly trails and scenic views, the mountain offers lush forests, refreshing sea breezes, and opportunities to interact with local communities along the way. The summit provides breathtaking views of Batangas Bay and nearby coastal areas, making it a perfect blend of adventure and relaxation. Hikers often enjoy a side trip to the pristine beaches at the base of the mountain, completing an unforgettable experience."
            img1={Mountaint3}
            img2={Mountaint4}
            />
        </div>
    )
}

export default Destination;