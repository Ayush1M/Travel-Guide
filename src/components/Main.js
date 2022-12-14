import React from "react";
import marker from "../place-marker.png";

export default function Main(props){
    return(
        <div className="flex-container">
            <div className="image-content">
                <img src={`${props.imageUrl}`} alt="" className="image-card" />
            </div>
            <div className="main-content">
                <div className="main-location">
                    <img src={marker} alt="" className="icon-image" />
                    <h4 className="location-name">{props.location}</h4>
                    <p><a 
                    className="location-tab" 
                    href={`${props.googleMapsUrl}`} 
                    target="_blank" 
                    rel="noreferrer noopener">View on Google maps</a></p>
                </div>
                <div>
                    <h2 className="main-title">{props.title}</h2>
                </div>
                <div>
                    <p className="main-date">{props.startDate} - {props.endDate}</p> 
                </div> 
                <div>
                    <p className="main-desc">{props.description}</p>
                </div>
            </div>
        </div>
    )
}