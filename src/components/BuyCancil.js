import React, { useState } from 'react';

import '../css/BuyCancil.css'  

const ReactExchangeForm = ({ product }) => {
    const [reason, setReason] = useState("");


    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Reason For Return/Exchange:', reason);
    }
}

function BuyCancil() {
  return (
    <div>
        <div className='return-ecxhange-form'>
            <h2>Product Details</h2>
            <div className='product-info'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVs5ve-dp4puG2ROprT-mOyPsA3mSGnB7C9A&s" alt="no img present"/>
                <div>
                    <h3>{}</h3>
                    <p>Price: 9,899.00{}</p>
                </div>

            </div>
            <form onSubmit={""}>
                <h3>Please Select Reason for Reason/Exchange</h3>
                <div className='reason-options'>
                    <label>
                        <input
                        type="radio"
                        name="reason"
                        value="product-not-needed"
                        // checked={reason === 'product-not-needed'}
                        // onChange={""}
                        />
                        product not need anymore
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="reason"
                        value="quality-issue"
                        // checked={reason === 'quality-issue'}
                        // onChange={""}
                      />
                      quality issue
                    </label>
                    <label>
                        <input 
                        type="Radio"
                        name="reason"
                        value="size-fit-issue"
                        // checked={reason === 'size-fit-issue'}
                        // onChange={""}
                        />
                        size fit issue
                    </label>
                    <label>
                        <input
                        type="Radio"
                        name="reason"
                        value="damaged-used"
                        // checked={reason === 'damaged-used'}
                        // onChange={""}
                        />
                        Damaged/Used product
                    </label>
                    <label>
                        <input
                        type="Radio"
                        name="reason"
                        value="item-missing"
                        // checked={reason === 'item-missng'}
                        // onChange={""}
                        />
                        item missing on the pakage
                    </label>
                    <label>
                        <input
                        type="Radio"
                        name="reason"
                        value="different-missing"
                        // checked={reason === 'different-missng'}
                        // onChange={""}
                        />
                        different/missing in the pakage
                    </label>
                </div>
                    <div>
                        <button type="submit" className='submit-btn'>
                         Submit
                        </button>
                        
                    </div>
                    
                

            </form>
        </div>
    </div>
  );
};

export default BuyCancil;