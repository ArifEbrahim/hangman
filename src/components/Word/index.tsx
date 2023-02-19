import classes from './Word.module.css'

function index() {
  const word = 'test'
  const guessedLetters = ['t']
  return (
    <div className={classes.container}>
      {word.split('').map((letter, index) => (
        <span className={classes.letterWrapper} key={index}>
          <span className={guessedLetters.includes(letter) ? classes.letterVisible : classes.letterHidden}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default index
