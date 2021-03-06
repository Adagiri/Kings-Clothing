import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_ROkPVeZDhc2gjVfbiLe8XwEB00koq9m9C6";
  const onToken = token => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: stripePrice,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
        console.log(response);
      })
      .catch(error => {
        console.log("Payment error", error);
        alert(
          "Payment failed, please make sure you used the test card details provided"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Kings Rifles Corp."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $ ${price}
        `}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
