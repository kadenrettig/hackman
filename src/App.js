import React from 'react'
import { useState } from 'react'

import Welcome from './components/Welcome'
import Game from './components/Game'

const App = () => {
  const [tab, setTab] = useState(0)

  // setTab for welcome
  function setWelcome() {
    setTab(0)
    console.log('Welcome State')
  }

  // setTab for game
  function setGame() {
    setTab(1)
    console.log('Game State')
  }

  // change to game tab
  function displayTab() {
    if (tab === 1) {
      console.log('Game Started')
      return <Game />
    }
    console.log('Welcome to HackMan')
    return <Welcome />
  }

  // swap from play button to letter buttons
  function displayButtons() {
    if (tab === 1) {
      // render map of letters + extra functionality
      return (
        <div className='flex justify-items-center'>
          <button
            className='font-bold rounded-full text-xl shadow bg-green-600 px-8 py-4 text-white hover:bg-green-400 m-4'
            onClick={setWelcome}
          >
            Back to Menu
          </button>
        </div>
      )
    }
    // initial start up / user returns to menu
    else {
      return (
        <button
          className='font-bold rounded-full text-xl shadow bg-green-600 px-8 py-4 text-white hover:bg-green-400'
          onClick={setGame}
        >
          Play Game
        </button>
      )
    }
  }

  return (
    <>
      {/* header + links */}
      <div className='h-24 text-center bg-gradient-to-b from-gray-500 to-gray-800 border-t-8 border-gray-600 border-b-8'>
        <div className='flex-row row-2 justify-items-center items-center'>
          <a
            href='https://github.com/kadenrettig'
            target='_blank'
            rel='noreferrer'
          >
            <button className='font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400 m-4'>
              GitHub
            </button>
          </a>
          <a
            href='https://github.com/kadenrettig/hackman/blob/main/README.md'
            target='_blank'
            rel='noreferrer'
          >
            <button className='font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400 m-4'>
              About This Project
            </button>
          </a>
          <a href='https://oregano.surge.sh' target='_blank' rel='noreferrer'>
            <button className='font-bold rounded-full text-xl shadow bg-green-600 px-4 py-2 text-white hover:bg-green-400 m-4'>
              About Me
            </button>
          </a>
        </div>
      </div>

      {/* welcome + gamescreen */}
      <div className='flex items-center justify-center h-auto border-t-8 border-b-8 border-gray-500 bg-gradient-to-r from-green-900 to-green-600 via-gray-600 animate-gradient-x'>
        <div className='xl:w-1/2 w-4/5 pt-16 pb-16 flex flex-col items-center justify-center text-white h-auto'>
          {displayTab()}
        </div>
      </div>

      <div className='h-32 bg-gray-600 flex items-center justify-center'>
        {displayButtons()}
      </div>

      {/* credits */}
      <div className='bg-gradient-to-t from-gray-800 to-gray-700 text-xl font-sans text-white h-18 flex-col text-center pt-6 border-t-8 border-gray-800 border-b-8'>
        @Kaden Rettig. HackMan 2022.
      </div>
    </>
  )
}

export default App
