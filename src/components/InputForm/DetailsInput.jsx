import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from "react-bootstrap/Form";
import classes from "./DetailsInput.module.css";

const DetailsInput = () => {
  return (
    <>
      <div className={classes.Main}>
        <div className={classes.textbox}>
          <p className={classes.heading}>Enter your details</p>
          <p className={classes.text}>
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
        </div>
        <div className={classes.inputsbox}>
          <div className={classes.row1}>
            <FloatingLabel
              controlId="floatingFullName"
              label="Full Name *"
              required
              className={classes.mb3}
            >
              <Form.Control
                type="text"
                placeholder="John Doe"
                required
                className={classes.customInput}
              />
            </FloatingLabel>
          </div>

          <div className={classes.row}>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingCountryCode"
                label="Country Code *"
                className={classes.mb3}
              >
                <Form.Control
                  type="text"
                  placeholder="+1"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingPhoneNumber"
                label="Phone Number *"
                className={classes.mb3}
              >
                <Form.Control
                  type="tel"
                  placeholder="123-456-7890"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email *"
                className={classes.mb3}
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingConfirmEmail"
                label="Confirm Email *"
                className={classes.mb3}
              >
                <Form.Control
                  type="email"
                  placeholder="confirm@example.com"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInput;
