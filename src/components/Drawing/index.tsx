import styles from './Drawing.module.css'

const HEAD = <div className={styles.head} />
const BODY = <div className={styles.body} />
const RIGHT_ARM = <div className={styles.rightArm} />
const LEFT_ARM = <div className={styles.leftArm} />
const RIGHT_LEG = <div className={styles.rightLeg} />
const LEFT_LEG = <div className={styles.leftLeg} />

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type DrawingProps = {
  numberOfGuesses: number
}

function index({numberOfGuesses}: DrawingProps) {
  return (
    <div className={styles.container}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.hangbar} />
      <div className={styles.topBar} />
      <div className={styles.middleBar} />
      <div className={styles.bottomBar} />
    </div>
  )
}

export default index
