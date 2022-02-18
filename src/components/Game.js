import React, { useEffect, useState } from 'react'
import Man from './Man'
import Word from './Word'
import Popup from './Popup'
import Incorrect from './Incorrect'
import Notification from './Notification'
// eslint-disable-next-line
import { showNotification as show, checkWin } from '../helpers/helpers'

import axios from 'axios'
import '../App.css'

const Game = () => {
  const [selectedWord, setSelectedWord] = useState('word')
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  // get selected word from api
  useEffect(() => {
    var endpoint = 'https://clemsonhackman.com/api/word?key=CBH54'
    if (playable === true) {
      axios.get(endpoint).then((response) => {
        console.log(response.data)
        setSelectedWord(JSON.parse(JSON.stringify(response.data.word)))
      })
    }
  }, [!playable])

  // get keyboard input
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase()
        // check letter inputted against current word
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter])
          } else {
            show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter])
          } else {
            show(setShowNotification)
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)
  }, [selectedWord, correctLetters, wrongLetters, playable])

  function playAgain() {
    setPlayable(true)

    // empty arrays
    setCorrectLetters([])
    setWrongLetters([])
  }

  // draw game screen
  return (
    <>
      <div className='font-mono font-bold text-8xl pb-12'>HANGMAN</div>
      <Notification showNotification={showNotification} />
      <Man wrongLetters={wrongLetters} />
      <Incorrect wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </>
  )
}

export default Game
