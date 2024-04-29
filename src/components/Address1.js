import React, { useState } from 'react';
import '../css/address.css';

const AddressPage = () => {
    const [selectedAddress, setSelectedAddress] = useState(0);
  
    const addresses = [
      {
        id: 0,
        name: 'Madala Surendra',
        addressLine: 'Ayyappa society, madhapur, Hyd, Telengana-5000081',
        pincode: '9441979598',
      },
      {
        id: 1,
        name: 'Sneha mandati',
        addressLine: 'Ayyappa society, madhapur, Hyd, Telengana-5000068',
        pincode: '8300000001',
      },
    ];
  
    const handleAddressSelect = (addressId) => {
      setSelectedAddress(addressId);
    };
  
    return (
      <div className="address-page">
        <h2>Delivery Address</h2>
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`address-item ${selectedAddress === address.id ? 'selected' : ''}`}
          >
            <div className="address-content">
              <input
                type="radio"
                name="address"
                checked={selectedAddress === address.id}
                onChange={() => handleAddressSelect(address.id)}
              />
              <div>
                <span className="name">{address.name}</span>
                <span className="pincode">{address.pincode}</span>
                <p className="address-line">{address.addressLine}</p>
              </div>
            </div>
            {selectedAddress === address.id && (
              <div className="address-actions">
                <button className="edit-button">Edit</button>
              </div>
            )}
            {selectedAddress === address.id && (
              <button className="deliver-here-button">Deliver Here</button>
            )}
          </div>
        ))}
        <button className="add-address-button">+ Add a new address</button>
      </div>
    );
  };
  
  export default AddressPage;