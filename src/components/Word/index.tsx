import styles from './Word.module.css'

function index() {
  const word = 'test'
  const guessedLetters = ['t']
  return (
    <div className={styles.container}>
      {word.split('').map((letter, index) => (
        <span className={styles.letterWrapper} key={index}>
          <span className={guessedLetters.includes(letter) ? styles.letterVisible : styles.letterHidden}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default index
