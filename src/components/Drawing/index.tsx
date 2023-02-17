import React from 'react'
import classes from './Drawing.module.css'

const HEAD = <div className={classes.head} />
const BODY = <div className={classes.body} />
const RIGHT_ARM = <div className={classes.rightArm} />
const LEFT_ARM = <div className={classes.leftArm} />
const RIGHT_LEG = <div className={classes.rightLeg} />
const LEFT_LEG = <div className={classes.leftLeg} />

function index() {
  return (
    <div className={classes.container}>
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {RIGHT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div className={classes.hangbar} />
      <div className={classes.topBar} />
      <div className={classes.middleBar} />
      <div className={classes.bottomBar} />
    </div>
  )
}

export default index
