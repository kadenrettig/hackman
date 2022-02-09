import React from "react";
import { useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import Game from "./components/Game";

const App = () => {
  const [tab, setTab] = useState(0);
  const [color, setColor] = useState("rgb(101, 169, 214)");
  const [bordCol, setBordCol] = useState("rgb(83, 139, 176)");

  function setGame() {
    setTab(1);
    setColor("rgb(84, 83, 79)");
    setBordCol("rgb(56, 55, 52)");
  }

  function displayTab() {
    if (tab === 1) {
      return <Game />;
      console.log("Game Started");
    }
    console.log("Welcome to HackMan");
    return <Welcome />;
  }

  return (
    <>
      <div className="h-24 p-8 h-4 flex-row row-2 justify-items-center items-center text-center bg-gradient-to-b from-gray-500 to-gray-800 border-t-8 border-gray-600 border-b-8">
        <button className="font-bold rounded-full text-xl shadow bg-blue-600 px-4 py-2 text-white hover:bg-green-400">
          GitHub
        </button>
      </div>
      <div
        style={{ backgroundColor: color, borderColor: bordCol }}
        className="flex items-center justify-center h-auto border-t-8 border-b-8"
      >
        <div className="xl:w-1/2 w-4/5 pt-48 pb-32 flex flex-col items-center justify-center text-white h-auto">
          {displayTab()}
        </div>
      </div>

      <div className="h-32 bg-gray-600 flex items-center justify-center">
        <button
          className="font-bold rounded-full text-xl shadow bg-blue-600 px-8 py-4 text-white hover:bg-green-400"
          onClick={setGame}
        >
          Play Game
        </button>
      </div>

      <div className="bg-gradient-to-t from-gray-800 to-gray-700 text-xl font-sans text-white h-20 flex-col text-center pt-6 border-t-8 border-gray-800 border-b-8">
        @Kaden Rettig. HackMan 2022.
      </div>
    </>
  );
};

export default App;
