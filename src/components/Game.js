import React, { useEffect, useContext } from 'react'
import Player from './Player'
import GameDescription from './GameDescription'
import CurrentSet from './CurrentSet'
import {GameContext} from '../GameContext'
import PreviousSets from './PreviousSets'


export default function Game() {
    const game = useContext(GameContext)

    return (
        <div>
            <GameDescription />
            <CurrentSet />
            <PreviousSets />
        </div>

    )
}
