import React, { createContext } from "react";

export const GameContext = createContext();

export function GameContextProvider(props) {
  const game = [{
    players: {
      player1: {
        name: "nadal",
        age: 35,
      },
      player2: {
        name: "federer",
        age: 40,
      },
    },
    sets: [],
  },
    (a)=>{game.sets.push(a)}]
  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
}
