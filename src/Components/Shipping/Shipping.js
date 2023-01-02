import React from "react";
import "./Shipping.css";

const Shipping = () => {
  return (
    <div>
      <div className="shippingFormContainer">
        <h2>Checkout Details</h2>
        <div className="shippingFomrs">
          <div className="billingAdress">
            <h3>Billing Address</h3>
            <div>
              <input type="text" name="" placeholder="Your Name" />
            </div>
          </div>
          <div className="shippingAdress">
            <h3>shipping Address</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
