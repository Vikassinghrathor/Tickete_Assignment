import React from 'react'
import classes from './HeaderTimer.module.css';

const HeaderTimer = () => {
  return (
    <>
      <div className={classes.HeaderTimer}>
      <p className={classes.para}>Holding Your Ticket for 00.00</p>
      </div>
    </>
  )
}

export default HeaderTimer