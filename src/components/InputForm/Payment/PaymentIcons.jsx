import React from 'react'
import Visa from '../../../assets/visa.svg';
import MasterCard from '../../../assets/mastercard.svg';
import Diners from '../../../assets/diners-club.svg';
import classes from './PaymentIcon.module.css';


const PaymentIcons = () => {
  return (
    <>
      <div className={classes.paymenticon}>
      <img src={Visa} alt='error'/>
      <img src={MasterCard} alt='error'/>
      <img src={Diners} alt='error'/>
      </div>
    </>
  )
}

export default PaymentIcons