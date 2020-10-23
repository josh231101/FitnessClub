import React from 'react'
import {Card, ImageCard, CardDescription} from './EventElements';

function Event({imageUrl, title, description, price,topic}) {
    return (
        <Card>
            <ImageCard src={imageUrl}/>
            <CardDescription>

                <h2>{title}</h2>
                <p>{description}</p>
                <strong>${price}.00</strong>
                <span>{topic}</span>
            </CardDescription>
        </Card>
    )
}

export default Event
