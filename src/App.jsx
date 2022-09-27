import React from 'react'
import Card from './components/Card'
import data from './data'
import Navbar from './components/Navbar'

export default function App(){
    const cards = data.map(item => {
            return(
        <div key={item.id}>
            <Card 
            imageUrl = {item.imageUrl}
            location = {item.location}
            googleMapsUrl = {item.googleMapsUrl}
            title = {item.title}
            startDate = {item.startDate}
            endDate = {item.endDate}
            description = {item.description}
            />
        </div>
    )  
    })
    
    return (
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}