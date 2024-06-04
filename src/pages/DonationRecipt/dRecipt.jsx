import React from "react";
import "./dRecipt.css";

const dRecipt = () => {
  return (
    <div className="donation-receipt">
      <h2>Thank you. Your donation has been received</h2>
      <div className="receipt-details">
        <div className="cell">Donation Number</div>
        <div className="cell">Date</div>

        <div className="cell">Name</div>
        <div className="cell">Phone Number</div>

        <div className="cell">Address</div>
        <div className="cell">Total</div>

        <div className="cell">Email</div>
      </div>
      <br />
      <div className="bank-details">
        <h1>Our bank details</h1>
        <br />
        <p id="dt">
          <strong>Account Owner:</strong> Mr. A.S.D Silva
        </p>
        <p id="dt">
          <strong>Bank Name:</strong> Peoples Bank PLC
        </p>
        <p id="dt">
          <strong>Branch:</strong> Galle
        </p>
        <p id="dt">
          <strong>Account Number:</strong> 220-003-4666-5631
        </p>
      </div>
    </div>
  );
};

export default dRecipt;
