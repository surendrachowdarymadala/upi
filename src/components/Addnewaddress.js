import React, { useState } from 'react';
import '../css/Addnewaddress.css';
import { FaLocationCrosshairs } from "react-icons/fa6";
// import img from '../components/images/img-0001.jfif';
import Item from "./item"

const Addnewaddress = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [landmark, setLandmark] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');
  const [addressType, setAddressType] = useState('home');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      name,
      mobileNumber,
      pincode,
      location,
      address,
      city,
      state,
      landmark,
      alternatePhone,
      addressType,
    });
  };

  return (
    <div className='container-xxl add-new-address1'>
     <div className="add-new-address">
      <h2 className='add-new-address-heading'>ADD NEW ADDRESS</h2>
      <div className='use-current-location-address'>
      <button className="use-current-location"> <FaLocationCrosshairs />&nbsp;Use my current location</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="10-digit mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address (Area and Street)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City/District/Town"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">--Select State--</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          {/* Add more state options if we need */}
        </select>
        <input
          type="text"
          placeholder="Landmark (Optional)"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alternate Phone (Optional)"
          value={alternatePhone}
          onChange={(e) => setAlternatePhone(e.target.value)}
        />
        <div className="address-type">
          <label>
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={addressType === 'home'}
              onChange={(e) => setAddressType(e.target.value)}
            />
            Home (All day delivery)
          </label>
          <label>
            <input
              type="radio"
              name="addressType"
              value="work"
              checked={addressType === 'work'}
              onChange={(e) => setAddressType(e.target.value)}
            />
            Work (Delivery between 10AM - 6PM)
          </label>
        </div>
        <button type="submit" className="save-and-deliver">
          SAVE AND DELIVER HERE
        </button>
        <button type="button" className="cancel">
          CANCEL
        </button>
      </form>
     </div>
     <div>
      <Item/>
     </div>
     </div>
     
    
  );
};

export default Addnewaddress;