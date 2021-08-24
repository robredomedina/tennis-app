import React, { useState, useEffect } from "react";

export default function GameBox(props) {

  const [game, setGame] = useState(props.game)
  const [p1Color, setp1Color] = useState('')
  const [p2Color, setp2Color] = useState('')

  useEffect(() => {
    setColors()
    
  }, [p1Color])

  const setColors = () => {
    if (props.game.player1 + props.game.player2 === 0) {
        setp1Color('')
        setp2Color('')
        return
    }
    else if (props.game.onServe === 'player1') {
      if (props.game.winner === 'player1') {
        setp1Color('green')
        setp2Color('')
      }
      else {
        setp1Color('')
        setp2Color('red')
      }
    }
    else {
      if (props.game.winner === 'player2') {
        setp1Color('')
        setp2Color('green')
      }
      else {
        setp1Color('red')
        setp2Color('')
      }

    }
  }

  return (
    <div className="gameBox">
      <div className="gameBoxPlayer" style={{'backgroundColor': p1Color}}>
        <p>{props.game.player1}</p>
      </div>
      <div className="gameBoxPlayer" style={{'backgroundColor': p2Color}}>
        <p>{props.game.player2}</p>
      </div>
    </div>
  );
}
