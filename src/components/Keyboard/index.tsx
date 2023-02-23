import classes from './Keyboard.module.css'
import { KEYS } from './keys'

function index() {
  return (
    <div className={classes.container}>
      {KEYS.map((letter) => (
        <button key={letter}>{letter}</button>
      ))}
    </div>
  )
}

export default index
