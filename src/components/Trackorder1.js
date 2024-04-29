import React, {  } from 'react';
import '../css/Trackorder1.css';


const OrderTracking = () => {
  return (
    <div className="order-tracking-container">
      <h2>Order Tracking</h2>
      <div className="order-timeline">
        <div className="timeline-line"></div>
        <div className="order-step">
          <div className="step-icon green">&#9679;</div>
          <div className="step-info">
            <h4>Order Tracking</h4>
            <p>Your order has been placed</p>
            <p>07:57 PM, 28 January, 2024</p>
          </div>
        </div>
        <div className="order-step">
          <div className="step-icon empty">&#9679;</div>
          <div className="step-info">
            <h4>Shipped</h4>
            <p>Expected by 30 January, 2024</p>
          </div>
        </div>
        <div className="order-step">
          <div className="step-icon empty">&#9679;</div>
          <div className="step-info">
            <h4>Delivered</h4>
            <p>Expected by 07 February, 2024</p>
          </div>
        </div>
        <a href="target=_blank" className="show-more">Show More &#9660;</a>
      </div>
      <div className="cancel-order-box">
        <button className="cancel-order-btn">Cancel Order &gt;</button>
      </div>
      {/* <div className="order-details">
        <h2>Order Details</h2>
        <div className="product-info">
          <div className="product-image">
            <img src={} alt="Product Image" />
          </div>
          <div className="product-details">
            <h3>Yellow Saree</h3>
            <p>&#8377;10500.99</p>
            <p>Color: Yellow</p>
            <p>Size: Medium</p>
            <p>Sub Total: &#8377;20750.99</p>
            <p>Tax: &#8377;945.00</p>
            <p>Total cost: &#8377;21695.99</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OrderTracking;