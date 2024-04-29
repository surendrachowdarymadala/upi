import React from 'react'
import '../css/buyeradd.css'

const Buyeraddress = () => {
  return (
    <div>
         <div className="container">
      <div className="delivery-address">
        <h2>Delivery Address</h2>
        <div className="address-card">
          <div className="address-info">
            <span className="address-name">Sneha mandati</span>
            <span className="address-id">8300000001</span>
            <p>Ayyappa society, madhapur, Hyd, Telengana-500068</p>
          </div>
          <button className="edit-btn">Edit</button>
          <button className="deliver-btn">Deliver Here</button>
        </div>
        <div className="address-card1">
          <div className="address-info">
            <span className="address-name">Gampa Kavya</span>
            <span className="address-id">8300000001</span>
            <p>Ayyappa society, madhapur, Hyd, Telengana-500068</p>
          </div>
        </div>
        <button className="add-address-btn">+ Add a new address</button>
      </div>

      <div className="items">
        <h2>Items</h2>
        <div className="item-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFqoFCjNWBqP9a8slRWLYXEZ2yaHNO2K5eQ&s" alt="Yellow Saree" />
          <div className="item-info">
            <h3>Yellow Saree</h3>
            <p>₹10500.99</p>
            <p>Color: Yellow</p>
            <p>Size: medium</p>
          </div>
        </div>
        <div className="price-details">
          <p>PRICE DETAILS</p>
          <div className="price-row">
            <span>Price (1 item)</span>
            <span>₹10500.99</span>
          </div>
          <div className="price-row">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>
          <div className="price-row total">
            <span>Amount Payable</span>
            <span>₹10500.99</span>
          </div>
        </div>
      </div>
    </div>

            
</div>
  )
}

export default Buyeraddress

