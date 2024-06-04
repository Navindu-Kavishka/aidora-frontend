import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import "./payinvoice.css"; // Import the CSS file

// Load your Stripe publishable key
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <form className="form">
      <div className="container">
        <div className="head">
          <div className="heade">PAY INVOICE</div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/images/cards.png" alt="Invoice" className="image" />
      </div>{" "}
      <label className="label">Payment Amount</label>
      <div className="formRow">
        <input
          type="text"
          className="input"
          value={amount}
          onChange={handleAmountChange}
        />{" "}
        <div className="edbt">
          <button type="button" className="editButton">
            Edit
          </button>
        </div>
      </div>
      <label className="label">Name On Card</label>
      <input type="text" className="input" />
      <label className="label">Card details</label>
      <br />
      <div className="ex">
        <div className="rightAlign"></div>
        <div>
          <CardElement options={cardStyle} className="cardElement" />
        </div>
      </div>
      <br />
      <br />
      <label className="label">Zip/Post Code</label>
      <input
        type="text"
        className="input"
        value={amount}
        onChange={handleAmountChange}
      />
      <div className="b">
        <div className="btn">
          <button type="submit" className="btton">
            Pay Now
          </button>
        </div>
      </div>
    </form>
  );
};

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

const cardStyle = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
    },
  },
};

export default App;
