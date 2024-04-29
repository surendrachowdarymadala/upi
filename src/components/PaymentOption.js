import React, { useState } from 'react';
import '../css/Paymentoption.css'

const PaymentOption = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    // Reset selected options when payment method changes
    setSelectedOptions([]);
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  return (
    <div className="payment-option-container">
      <h2 className="payment-option-title">Payment Option</h2>
      <form className="payment-option-form">
        <label className="payment-option-label">
          <input
            type="radio"
            name="payment-method"
            value="upi"
            checked={paymentMethod === 'upi'}
            onChange={handlePaymentMethodChange}
          />
          UPI
        </label>
        {/* Dropdown menu for UPI options */}
        {paymentMethod === 'upi' && (
          <div className="upi-options">
            <label>
              <input
                type="radio"
                value="googlepay"
                checked={selectedOptions.includes('y')}
                onChange={handleOptionChange}
              />
              Google Pay
            </label>
            <label>
              <input
                type="radio"
                value="phonepay"
                checked={selectedOptions.includes('phonepay')}
                onChange={handleOptionChange} name='Phone Pay'
              />
              Phone Pay
            </label>
            <label>
              <input
                type="radio"
                value="paytm"
                checked={selectedOptions.includes('paytm')}
                onChange={handleOptionChange} name='Paytm'
              />
              Paytm
            </label>
          </div>
        )}

        {/* Other payment options */}
        {/* Add your other payment options here similar to the above */}
      </form>
      {/* Price details */}
    </div>
  );
};

export default PaymentOption;
