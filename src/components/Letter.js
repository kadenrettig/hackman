import React from "react";

const Button = ({ letter }) => {
  const { id } = letter;
  const retrieveLetter = () => {
    console.log(letter);
  };

  return (
    <button
      onClick={retrieveLetter}
      className="font-bold rounded-full text-xl shadow bg-blue-500 px-6 py-4 m-2 text-white hover:bg-green-400"
    >
      {letter}
    </button>
  );
};

export default Button;
