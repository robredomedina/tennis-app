import React, { useContext } from 'react'
import './gameDescription.css'
import PlayerDescription from './PlayerDescription'


import {GameContext} from '../GameContext';

export default function GameDescription() {

    const [game] = useContext(GameContext)
    
    return (
        <div className="gameDescriptionDiv">
            <PlayerDescription player={game.players.player1}/>
            <div>
                <h2 className="tournament">Roland Garros</h2>
                <h3 className="round">Semifinals</h3>
            </div>
            <PlayerDescription player={game.players.player2}/>
        </div>
    )
}
