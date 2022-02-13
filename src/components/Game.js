import React from "react";
import Man from "./Man";
import "../App.css";

const Game = () => {
  return (
    <>
      <div className="font-mono font-bold text-6xl">Hangman</div>
      <div className="game-container">
        <Man />
      </div>
    </>
  );
};

export default Game;
