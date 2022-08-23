export default function Main(props){
    return(
        <div className="flex-container">
            <div className="image-content">
                <img src={`../images/${props.item.imageUrl}`} alt="" className="image-card" />
            </div>
            <div className="main-content">
                <div className="main-location">
                    <img src="../images/place-marker.png" alt="" className="icon-image" />
                    <h4 className="location-name">{props.item.location}</h4>
                    <p><a 
                    className="location-tab" 
                    href={`${props.item.googleMapsUrl}`} 
                    target="_blank" 
                    rel="noreferrer noopener">View on Google maps</a></p>
                </div>
                <div>
                    <h2 className="main-title">{props.item.title}</h2>
                </div>
                <div>
                    <p className="main-date">{props.item.startDate} - {props.item.endDate}</p> 
                </div> 
                <div>
                    <p className="main-desc">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}