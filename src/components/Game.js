import React, { useEffect, useState } from 'react';
import Man from './Man';
import Word from './Word';
import Popup from './Popup';
import WrongLetters from './WrongLetters';
import Notification from './Notification';
import { showNotification as show, checkWin } from '../helpers/helpers';

import '../App.css';

const Game = () => {
  const [selectedWord, setSelectedWord] = useState('word');
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // get new word
  }

  // draw game screen
  return (
    <>
      <div className='font-mono font-bold text-8xl pb-12'>HANGMAN</div>
      <div>
        <Notification showNotification={showNotification} />
      </div>
      <div className=''>
        <Man wrongLetters={wrongLetters} />
      </div>
      <div>
        <WrongLetters wrongLetters={wrongLetters} />
      </div>
      <div>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <div></div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  );
};

export default Game;
