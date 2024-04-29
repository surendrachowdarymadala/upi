import React from "react";

const Item = () => {
    return(
        <div className="container">
            <div className="header">
                <h2>Items</h2>
                <hr />

            </div>
            <div className="product-details">
                <img className="product-image" src="img-0001.jfif" alt="yellow saree" />
                <div className="product-info">
                <h3>Yellow Saree</h3>
                <p>₹10500.99 <span className="quantity">x 1</span></p>
                <p>Color: Yellow</p>
                <p>Size: "medium"</p>
                </div>

            </div>
            <hr />
            <div className="price-details">  
             <h3>PRICE DETAILS</h3>
             <div className="price-row">
             <span>Price (1 item)</span>
             <span>₹10500.99</span>
             </div>
             <div className="price-row">
             <span>Delivery Charges</span>
             <span className="free">FREE</span>
            </div>
         </div>
             <hr />
         <div className="total-amount">
         <span>Amount Payable</span>
         <span>₹10500.99</span>
         </div>
        </div>
    )
}

export default Item;