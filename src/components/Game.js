import React from "react";
import Letter from "./Letter";

const Game = () => {
  // array of letters for buttons
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
  ];

  // map each letter to a button
  const buttonList = letters.map((letter) => (
    <Letter key={letter.id} letter={letter} />
  ));

  // draw game screen
  return (
    <>
      <div className="font-mono font-bold text-6xl pb-40">Hangman</div>
      <center>
        <div className="flex-row row-2 pt-36 justify-center items-center">
          {buttonList}
        </div>
      </center>
    </>
  );
};

export default Game;
