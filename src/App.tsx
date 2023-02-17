import React, { useState } from 'react'
import words from './wordList.json'
import classes from './App.module.css'
import Drawing from './components/Drawing'
import Word from './components/Word'
import Keyboard from './components/Keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  )
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  return (
    <div className={classes.appContainer}>
      <div className={classes.resultContainer}>Lose Win</div>
      <Drawing />
      <Word />
      <Keyboard />
    </div>
  )
}

export default App
