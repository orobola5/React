import './myEvents.css';
import React from "react"
const MyEvent=(props)=>{
 
    return(
        <div className="event-card">
            <div className="image-container" 
            style= {{backgroundImage:'url(https://images.pexels.com/photos/7893825/pexels-photo-7893825.jpeg?cs=srgb&dl=pexels-kampus-production-7893825.jpg&fm=jpg)'}}>

            </div>
            <div className="event-details">
                <p>Event Title</p>
                <h5>{props.event.title} </h5>
                <p>Event Description</p>
                <h5>{props.event.description}</h5>

            </div>
            <div className="event-actions">
                <button>View Details</button>

            </div>
        </div>
    )

}
export default MyEvent