import React from "react";
import "../index.css"

export default function Travel(props) {
   
    return (
        
        <div className="container-travel">
            <img src={props.imageUrl} alt="" id="place"/>
            <div className="info-travel">
                <div className="firstLine-travel">
                <p><img src="pin.svg" alt="" />
                    {props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                
                <h3>{props.title}</h3>
                <h6>From {props.startDate} to {props.endDate}</h6>
                <p className="myParagraph">{props.description}</p>
            </div>
        </div>

    )
}