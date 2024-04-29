import React from 'react';
import '../css/Trackorder2.css';

const OrderTracking = () => {
    return (
      <div className="order-tracking">
        <h2 className='Title'>Order Tracking</h2>

        <div className="tracking-steps">
        {/* <div className='top-container'> */}
          <div className="step-line"></div>
          <div className="step active">
            <div className="step-icon">&#10004;</div>
            {/* icon */}
            <div className="step-content">
              <p>Your order has been placed</p>
              <span>07:57 PM, 28 January, 2024</span>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">&#10004;</div>
            {/* icon */}
            <div className="step-content">
              <p>Shipped</p>
              <span>Expected by 30 January, 2024</span>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">&#10004;</div>
            {/* icon */}
            <div className="step-content">
              <p>Delivered</p>
              <span>Expected by 07 February, 2024</span>
            </div>
          </div>
        </div>
        <div className="show-more">
          <a className='show-more'>Show More &#x25BC;</a>
        </div>
        <div className="cancel-order">
          <button>Cancel Order &gt;</button>
        </div>
        {/* </div> */}
        <div className="order-details">
            <h3>Order Details</h3>
          <div className="product-details">
            <img className='image' src="https://example.com/product-image.jpg" alt="Yellow Saree" />
            <div className="product-info">
              <h3>Yellow Saree</h3>
              <p>Color: Yellow</p>
              <p>Size: Medium</p>
              <p>Sub-total: ₹10500.99</p>
              <p>Tax: ₹985.60</p>
              <p>Total cost: ₹11486.59</p>
            </div>
          </div>
        </div>
          
      </div>
    );
  };
  
  export default OrderTracking;