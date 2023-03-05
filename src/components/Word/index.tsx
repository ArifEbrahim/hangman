import styles from './Word.module.css'

type WordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal: boolean
}

function index({ guessedLetters, wordToGuess, reveal = false }: WordProps) {
  return (
    <div className={styles.container}>
      {wordToGuess.split('').map((letter, index) => (
        <span className={styles.letterWrapper} key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? styles.letterVisible
                : styles.letterHidden
            } ${
              !guessedLetters.includes(letter) && reveal ? styles.letterRed : ''
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default index
