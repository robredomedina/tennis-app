import React, { useEffect, useContext } from 'react'
import { GameContext } from "../GameContext";

export default function PreviousSets() {

    
    const [ {players, sets}, setSets ] = useContext(GameContext);

    useEffect(() => {
        console.log(sets)
        console.log(players)
        console.log(setSets)
        
    }, [sets])

    return (
        <div>
            <p>Previous sets: </p>
            <p>{players.player1.name} - {sets[0]}</p>
            <p>{players.player2.name} - </p>
        </div>
    )
}
