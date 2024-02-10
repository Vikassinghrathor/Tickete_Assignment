import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Badge from "react-bootstrap/Badge";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./PaymentInput.module.css";

const PaymentInput = () => {
  return (
    <>
      <div className={classes.Main}>
        <div className={classes.textbox}>
          <p className={classes.heading}>Select your mode of payment</p>
          <p className={classes.text}>
            We need your card details to complete the reservation.
          </p>
        </div>
        <div className={classes.card}>
          <div className={classes.inputsbox}>
            <div className={classes.row}>
              <div className={classes.column}>
                <FloatingLabel
                  controlId="name"
                  label="Name on card *"
                  className={classes.mb3}
                >
                  <Form.Control
                    type="text"
                    placeholder="Name on card"
                    required
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
              <div className={classes.column}>
                <FloatingLabel controlId="card" label="Card number *">
                  <Form.Control
                    type="text"
                    minLength={16}
                    maxLength={16}
                    placeholder="Card number"
                    required
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column}>
                <FloatingLabel controlId="expiry" label="Expiry date *">
                  <Form.Control
                    type="text"
                    required
                    placeholder="Expiry date"
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
              <div className={classes.column}>
                <FloatingLabel controlId="cvc" label="CVV/CVC *">
                  <Form.Control
                    type="text"
                    minLength={3}
                    maxLength={4}
                    placeholder="CVV/CVC"
                    required
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
            </div>
            <div className={classes.totaltext}>
              <div className={classes.infoContainer}>
                <p>Total payable:</p>
                <p>$XXX</p>
              </div>
              <div className={classes.badgeContainer}>
                <Badge bg="success">You save price</Badge>
              </div>
            </div>
            <div className={classes.infoContainer}>
                <p>You will be charged in AED</p>
                <BsFillInfoCircleFill />
            </div>
            <div className={classes.row}>
              <Button variant="primary" id="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInput;
