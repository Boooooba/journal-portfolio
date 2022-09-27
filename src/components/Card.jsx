import React from 'react'


export default function Card(props){
    return(
        <div className='container'>
            <img src={`${props.imageUrl}`} className ="img"/>
            <div className="location-maps">
                <p className='location'> <img className ="img-location" src='https://img.freepik.com/premium-vector/pin-symbol-indicates-location-gps-map_68708-398.jpg?w=2000'/>{props.location.toUpperCase()}</p>
                <a className ='maps' href={`${props.googleMapsUrl}`}>View on Google Maps </a>
            </div>
            <h3 className = "title">{props.title}</h3>
            <span className = "startDate">{props.startDate} - {props.endDate}</span>
            <p className = "description">{props.description}</p>
        </div>
    )
}