import styles from './Keyboard.module.css'
import { KEYS } from './keys'

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled: boolean
}

function index({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) {
  return (
    <div className={styles.container}>
      {KEYS.map((letter) => {
        const isActive = activeLetters.includes(letter)
        const isInactive = inactiveLetters.includes(letter)
        return (
          <button
            onClick={() => addGuessedLetter(letter)}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${
              isInactive ? styles.inactive : ''
            }`}
            disabled={isActive || isInactive || disabled}
            key={letter}
          >
            {letter}
          </button>
        )
      })}
    </div>
  )
}

export default index
