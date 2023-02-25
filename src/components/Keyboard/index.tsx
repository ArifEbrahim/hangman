import styles from './Keyboard.module.css'
import { KEYS } from './keys'

function index() {
  return (
    <div className={styles.container}>
      {KEYS.map((letter) => (
        <button className={styles.btn} key={letter}>{letter}</button>
      ))}
    </div>
  )
}

export default index