import React from "react"

const Incorrect = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && (
          <p className="text-red-500 text-xl">Wrong Letters:</p>
        )}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  )
}

export default Incorrect
