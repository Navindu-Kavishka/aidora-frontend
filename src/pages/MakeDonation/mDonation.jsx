import React, { useState } from "react";
import "./mDonation.css";

const mDonation = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDonate = () => {
    alert(`Thank you for your donation of $${amount}!`);
  };
  const handleImageUpload = (e) => {
    setImageFile(e.target.files[0]); // Store the uploaded image file
  };
  return (
    <div className="donation-page">
      <div className="header2">
        <div className="hed">
          <div className="header1">Make a Donation</div>
        </div>
        <div className="header3">
          <div className="header4">be a kind</div>{" "}
        </div>
      </div>
      <div className="donationcontainer">
        {" "}
        <div className="dinfo">
          <div className="donationinfo">
            <div className="ch">
              <img src="./images/child2.png" alt="Donation" />{" "}
            </div>
            <div className="ypd">
              <div className="yo">
                <div className="h_2">YOU ARE DONATING TO :</div>
              </div>
              <div className="pro">
                <h4>Providing access to safe water, sanitation, and hygiene</h4>
              </div>
              <div className="donation-progress">
                $7,000.00 <br />
                70% Donated <br />
                Goal: $30,000.00
              </div>
            </div>
          </div>
        </div>
        <div className="domo">
          <div className="donation-amounts">
            <div className="amounts2">
              {" "}
              <div className="domo3">
                {" "}
                <h3>Select Donation Amount</h3>
              </div>
              <br />
              <div className="domo2">
                <button onClick={() => setAmount(5)}>$5</button>
                <button onClick={() => setAmount(10)}>$10</button>
                <button onClick={() => setAmount(20)}>$20</button>
                <button onClick={() => setAmount(30)}>$30</button>
                <button onClick={() => setAmount(40)}>$40</button>
                <button onClick={() => setAmount(50)}>$50</button>
                <button onClick={() => setAmount(60)}>$60</button>
                <button onClick={() => setAmount(70)}>$70</button>
                <button onClick={() => setAmount(80)}>$80</button>
                <button onClick={() => setAmount(90)}>$90</button>
              </div>
              <br />
              <div className="in">
                {" "}
                <input
                  type="number"
                  placeholder="Other Amount (USD)"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>{" "}
              <br />
              <br />
              <br />
              <div className="pm">
                <h4>PAYMENT METHOD</h4>
              </div>
              <div className="payment-methods">
                <div className="ig1">
                  <img id="ig11" src="images/paypallogo.png" alt="PayPal" />{" "}
                </div>
                <div className="ig2">
                  <img
                    id="ig22"
                    src="images/creditcard.png"
                    alt="Credit Card"
                  />{" "}
                </div>
              </div>
              <div className="ii">
                {" "}
                <img id="ig111" src="images/cards.png" alt="PayPal" />{" "}
              </div>
              <br /><br /><br /><br />
              <div className="onbt">
                <button onClick={handleDonate}>DONATE NOW</button>
              </div>
            </div>
          </div>
          <div className="money-transfer">
            <h3>Money Transfer</h3><br />
            <div>
            <p>Our bank details</p>
            <p>Account Owner: Mr. A.S.D Silva</p>
            <p>Bank Name: Peoples Bank PLC</p>
            <p>Branch: Galle</p>
            <p>Account Number: 220-003-4666-5631</p></div>
            <input type="file" onChange={handleImageUpload} />{" "}
            {/* File upload input */}
            <p>Upload an image of your bank statement (optional)</p>
            <br /><br /><br />
            <div className="onbt">
                <button onClick={handleDonate}>DONATE NOW</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mDonation
