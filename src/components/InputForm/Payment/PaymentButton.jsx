import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { BsLock } from "react-icons/bs";


const PaymentButton = () => {
  return (
    <>
      <Button
      style={{
        width: "fit-content",
        height: "fit-content",
        padding: "16px 20px",
        borderRadius: "16px",
        gap: "12px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
        marginTop: '32px'
      }}
      variant="dark" // This sets the color of the button when not hovering
    >
      <BsLock style={{ color: "#ffffff" }} /> {/* Set the color for the icon */}
      {" "} {/* Add space between icon and text */}
      Confirm & Pay
    </Button>
    </>
  )
}

export default PaymentButton