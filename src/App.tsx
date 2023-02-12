import React, { useState } from 'react'
import words from './wordList.json'
import classes from './App.module.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  )
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  return <div className={classes.container}></div>
}

export default App
