import React, { useState, useCallback } from 'react'
import words from './wordList.json'
import classes from './App.module.css'
import Drawing from './components/Drawing'
import Word from './components/Word'
import Keyboard from './components/Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )
  const activeLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  )
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return
    setGuessedLetters((currentLetters) => [...currentLetters, letter])
  }

  return (
    <div className={classes.appContainer}>
      <div className={classes.resultContainer}>
        {isWinner && 'Winner! - refresh to play again'}
        {isLoser && 'Nice try - refresh to play again'}
      </div>
      <Drawing numberOfGuesses={incorrectLetters.length} />
      <Word
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <Keyboard
        activeLetters={activeLetters}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>
  )
}

export default App
