import React, { useState, useEffect, useContext } from "react";
import "./currentSet.css";
import { GameContext } from "../GameContext";

import GameBox from "./GameBox";

export default function CurrentSet() {
  const [ {players, sets }, setSets] = useContext(GameContext);

  const [player1serving, setPlayer1Serving] = useState(true);
  const [onTieBreak, setOnTieBreak] = useState(false);
  const [setFinished, setSetFinished] = useState(false);

  const [games, setGames] = useState([
    { player1: 0, player2: 0, winner: "", onServe: "player1", isBreak: false },
  ]);

  const isBreak = (game, winner) => {
    if (game.onServe ===  winner) return false;
    else return true;
  };

  const startTieBreak = () => {
    setOnTieBreak(true);
  }


  const checkIfSetFinished = (game, player) => {
    let otherPlayer = ''
    player === 'player1'? otherPlayer = 'player2' : otherPlayer = 'player1'
    if (game[player] === 6) {
      switch (game[otherPlayer]) {
        case 6:
          console.log("start tie break")
          startTieBreak(true)
          break;
        case 5:
          console.log(`continue set`)
          break;
        default:
          console.log(`set winner ${player}`)
          finishSet(player);
          break;
      }
    }
  }

  const addGame = (player) => {
    setPlayer1Serving(!player1serving);
    let n = games.length;
    let new_games = [...games];
    let game_to_add = { ...new_games[n - 1] };
    let is_Break = isBreak(game_to_add, player);
    game_to_add[player] += 1;
    game_to_add["winner"] = player;
    game_to_add["onServe"] === "player1"
      ? (game_to_add["onServe"] = "player2")
      : (game_to_add["onServe"] = "player1");
    game_to_add["isBreak"] = is_Break;
    checkIfSetFinished(game_to_add, player);
    setGames((prev) => [...prev, game_to_add]);
  };

  const resolveTieBreak = (player) => {
    let n = games.length;
    let new_games = [...games];
    let game_to_add = { ...new_games[n - 1] };
    game_to_add[player] += 1;
    game_to_add["winner"] = player;
    setGames((prev) => [...prev, game_to_add]);
    finishSet(player);
  }

  
  const finishSet = (winner) => {
    setSetFinished(true);
    console.log("games: ", games)
    setSets(games)
  }

  return (
    <>
    {setFinished ?
    <div>Set Finished. Winner {games[games.length-1].winner}</div>
    :
    <div>
      <div className="currentSetScoreboard">
        <div className="playersNames">
          <div className="playerName">
            {player1serving ? (
              <p>(serving) {players.player1.name}</p>
            ) : (
              <p>{players.player1.name}</p>
            )}
          </div>
          <div className="playerName">
            {!player1serving ? (
              <p>(serving) {players.player2.name}</p>
            ) : (
              <p>{players.player2.name}</p>
            )}
          </div>
        </div>
        {games.map((game) => {
          return <GameBox game={game} />;
        })}

        <div className="gameAddersButtons">
          <div className="buttonAdder">
            {onTieBreak? 
            <button onClick={() => resolveTieBreak("player1")}>TieBreakWinner</button>
            :<button onClick={() => addGame("player1")}>Add Game</button>
            }
          </div>
          <div className="buttonAdder">
            {onTieBreak? 
            <button onClick={() => resolveTieBreak("player2")}>TieBreakWinner</button>
            :<button onClick={() => addGame("player2")}>Add Game</button>
            }
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
}
