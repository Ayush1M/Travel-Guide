

export default function Main(props){
    return(
        <div className="flex-container">
            <div className="image-content">
                <img src={process.env.PUBLIC_URL + `./images/${props.img}`} alt="" className="image-card" />
            </div>
            <div className="main-content">
                <div className="main-location">
                    <img src={process.env.PUBLIC_URL + "./images/place-marker.png"} alt="" className="icon-image" />
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