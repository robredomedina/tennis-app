import React from 'react'
import './playerDescription.css'
import nadal from '../assets/nadal.png'
import federer from '../assets/federer.jpg'

export default function PlayerDescription(props) {
    return (
        <div>
            {props.player.name == 'nadal'?
            <img src={nadal} />
            :<img src={federer} />}
            <p>Name: {props.player.name}</p>
            <p>Age: {props.player.age}</p>
        </div>
    )
}
