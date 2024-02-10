import React from 'react'
import classes from './InputForm.module.css';
import InfoBanner from './InfoBanner';
import DetailsInput from './DetailsInput';
import AdditionalDetails from './AdditionalDetails';
import PaymentInput from './PaymentInput';

const InputForm = () => {
  return (
    <>
      <div className={classes.Main}>
      <div className={classes.inputs}>
      <h1 className={classes.heading}>Confirm & pay</h1>
      <InfoBanner/>
      <DetailsInput/>
      <AdditionalDetails/>
      <PaymentInput/>
      </div>
      <div className={classes.confirmation}>

      </div>
      </div>
    </>
  )
}

export default InputForm