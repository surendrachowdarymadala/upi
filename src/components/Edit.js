import React from 'react';
import '../css/Edit.css';

function App() {
  return (
    <div className='main '>
    <div >
      <h1>
      Edit profile
      </h1>
    </div>
    <div className='contains1'>
      <form>
        
      <div className='form-group-first-last-name'>
        <span className='last-name-input-field1'>
          <label htmlFor="firstName">First Name</label>
          <input type="text" value="Jean" className='first-name-input'/>
        </span>
        <span className='last-name-input-field2'>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" value="Laura" className='last-name-input' />
        </span>
        
        </div>
       

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value="xyz@gmail.com" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value="Hyderabad, Telengana" />
        
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="tel" id="contactNumber" value="+911234567890" />
        </div>

        <div className='fifth-line'>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select id="city">
            <option value="Madhapur">Madhapur</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state">
            <option value="Telengana">Telengana</option>
            
          </select>
        </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className='password-wrapper'>
          <input type="password" id="password" value="sbdfbnd65sfdvb s" />
          <input type="checkbox" id="showPassword" onchange="togglePassword()" />
          {/* <label for="showPassword">Show Password</label> */}
        </div>
        </div>

        <div className="button-group">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save</button>
        </div>
        
      </form>
    </div>
    </div>
  );
}

export default App;




<div className="container">
      <h1 className='edit'>Edit profile</h1>
      <div className="profile-image">
        {/* Add profile image here */}
      </div>
      <br>
      </br>
      <form>
        <div className='first-line'>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value="Jean" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value="Laura" />
        </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value="xyz@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value="Hyderabad, Telengana" />
        
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="tel" id="contactNumber" value="+911234567890" />
        </div>
        <div className='fifth -line'>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select id="city">
            <option value="Madhapur">Madhapur</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state">
            <option value="Telengana">Telengana</option>
            {/* Add more options as needed */}
          </select>
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value="sbdfbnd65sfdvb s" />
        </div>
        <div className="button-group">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>