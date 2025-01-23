import TripData from "./TripData";
import "./TripStyle.css"
import Trip1 from "../assest/5.jpg"
import Trip2 from "../assest/8.jpg"
import Trip3 from "../assest/6.jpg"

function Trip(){
    return(
        <div className="trip">
<h1>Recent Trip</h1>
<p>You can discover unique destination using google Maps.</p>
<div className="tripcard">
<TripData
image={Trip1}
heading="Trip in Indonesia"
text="A trip to Indonesia offers stunning beaches, ancient temples, and lush landscapes. Explore Bali’s beauty, Java’s cultural sites, and Komodo’s wildlife, or hike Mount Bromo for breathtaking views. It’s a perfect mix of adventure and relaxation"
/>

<TripData
image={Trip2}
heading="Trip in Malaysia"
text="A trip to Malaysia offers a mix of modern cities, cultural heritage, and natural wonders. Explore Kuala Lumpur’s iconic Petronas Towers, visit historic Malacca and Penang, or relax on Langkawi’s beaches. Nature lovers can trek in the Cameron Highlands or discover wildlife in Borneo’s rainforests. It’s a destination full of diversity and adventure."
/>

<TripData
image={Trip3}
heading="Trip in France"
text="A trip to France offers a blend of culture, history, and stunning landscapes. Explore Paris with its iconic Eiffel Tower and Louvre Museum, wander through charming villages in Provence, or relax on the French Riviera. Visit historic sites like Mont Saint-Michel and the castles of the Loire Valley, and savor world-class cuisine and wine. France promises a perfect mix of romance, art, and adventure."
/>
</div>
        </div>
    )
}

export default Trip;