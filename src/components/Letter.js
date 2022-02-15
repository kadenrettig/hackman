import React, { useState } from 'react';

const Button = ({ onClick, letter }) => {
  const { id } = letter;

  return (
    <button
      onClick={onClick}
      className='font-bold rounded-full border-8 border-green-500 text-xl shadow bg-green-400 px-6 py-4 m-2 text-gray-600 hover:bg-green-400'
    >
      {letter}
    </button>
  );
};

export default Button;
