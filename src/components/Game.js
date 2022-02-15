import React, { useState } from 'react';
import Letter from './Letter';
import Word from './Word';

const Game = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [letterClicked, setLetterClicked] = useState(null);

  // select current letter
  const handleClick = (value) => () => {
    setLetterClicked(value);
    console.log(value);
  };

  // array of letters for buttons
  const letters = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];
  // map each letter to a button
  const buttonList = letters.map((letter) => (
    <Letter key={letter.id} onClick={handleClick(letter)} letter={letter} />
  ));

  // draw game screen
  return (
    <>
      <div className='font-mono font-bold text-8xl pb-12'>HANGMAN</div>
      <div className='flex position-absolute font-mono font-bold - text-8xl pt-20'>
        <Word selectedWord={'word'} correctLetters={correctLetters} />
      </div>
      <center>
        <div className='flex-row row-2 pt-16 justify-center items-center'>
          {buttonList}
        </div>
      </center>
    </>
  );
};

export default Game;
