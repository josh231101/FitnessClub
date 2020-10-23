import React from 'react'

function Event({imageUrl, title, description, price,topic}) {
    return (
        <div>
            <img src={imageUrl}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <strong>{price}</strong>
            <span>{topic}</span>
        </div>
    )
}

export default Event
