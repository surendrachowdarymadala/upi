import React, { useState } from 'react';
import '../css/Editprofile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Laura',
    email: 'xyz@gmail.com',
    address: 'Hyderabad, Telengana',
    contactNumber: '+911234567890',
    city: 'Madhapur',
    state: 'Telengana',
    password: 'abcfghd5safgh',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    React.createElement('div', { className: 'edit-profile' },
      React.createElement('h2', null, 'Edit profile'),
      React.createElement('div', { className: 'input-group' },
        React.createElement('input', {
          type: 'text',
          name: 'firstName',
          value: formData.firstName,
          onChange: handleInputChange,
          placeholder: 'First Name',
        }),
        React.createElement('input', {
          type: 'text',
          name: 'lastName',
          value: formData.lastName,
          onChange: handleInputChange,
          placeholder: 'Last Name',
        })
      ),
      React.createElement('div', { className: 'input-group' },
        React.createElement('input', {
          type: 'email',
          name: 'email',
          value: formData.email,
          onChange: handleInputChange,
          placeholder: 'Email',
        }),
        React.createElement('div', { className: 'checkbox-container' },
          React.createElement('input', { type: 'checkbox', id: 'emailCheckbox' }),
          React.createElement('label', { htmlFor: 'emailCheckbox' })
        )
      ),
      React.createElement('input', {
        type: 'text',
        name: 'address',
        value: formData.address,
        onChange: handleInputChange,
        placeholder: 'Address',
      }),
      React.createElement('input', {
        type: 'text',
        name: 'contactNumber',
        value: formData.contactNumber,
        onChange: handleInputChange,
        placeholder: 'Contact Number',
      }),
      React.createElement('div', { className: 'input-group' },
        React.createElement('select', {
          name: 'city',
          value: formData.city,
          onChange: handleInputChange,
        },
          React.createElement('option', { value: 'Madhapur' }, 'Madhapur')
        ),
        React.createElement('select', {
          name: 'state',
          value: formData.state,
          onChange: handleInputChange,
        },
          React.createElement('option', { value: 'Telengana' }, 'Telengana')
        )
      ),
      React.createElement('div', { className: 'input-group' },
        React.createElement('input', {
          type: showPassword ? 'text' : 'password',
          name: 'password',
          value: formData.password,
          onChange: handleInputChange,
          placeholder: 'Password',
        }),
        React.createElement('div', { className: 'checkbox-container' },
          React.createElement('input', {
            type: 'checkbox',
            id: 'passwordCheckbox',
            checked: showPassword,
            onChange: togglePasswordVisibility,
          }),
          React.createElement('label', { htmlFor: 'passwordCheckbox' })
        )
      ),
      React.createElement('div', { className: 'button-group' },
        React.createElement('button', { className: 'cancel-button' }, 'Cancel'),
        React.createElement('button', { className: 'save-button' }, 'Save')
      )
    )
  );
};

export default EditProfile;