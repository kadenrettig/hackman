import React from "react";
import Man from "./Man";
import "../App.css";

function Game() {
  return (
    <>
      <div className="font-mono font-bold text-6xl pb-20">(: Hangman :)</div>
      <div className="game-container">
        <Man />
      </div>
    </>
  );
}

export default Game;
