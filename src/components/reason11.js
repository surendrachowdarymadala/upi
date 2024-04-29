import React, { useState } from 'react';
import '../css/reason11.css'
import img from '../components/images/img-0001.jfif';
import { FaLessThan } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { BsShieldFillExclamation } from "react-icons/bs";
import { TbRulerMeasure } from "react-icons/tb";
import { IoShirt } from "react-icons/io5";
import { GrDropbox } from "react-icons/gr";
import { AiOutlineDropbox } from "react-icons/ai";

const ReturnReason = () => {
    const [selectedReason, setSelectedReason] = useState('');
  
    const handleReasonChange = (e) => {
      setSelectedReason(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Selected reason:', selectedReason);
    };
  
    return (
      <div className="return-reason">
      <div className='back-btn'>
      <h3><FaLessThan />Return to Previous Page</h3>
      </div>
      
      <div className="product-details">
        <div className='product-data'>
          <h5>Product Details</h5>
          <h3>Yellow Saree</h3>
          <p>&#8377;10500.99</p>
          <p>Size: M</p>
          <p>Qty: 1</p>
        </div>
        <div className="product-image">
          <img src={img} alt="Product Image" />
        </div>
      </div>
      <h3 className='heading-colour'>Please select reason for return/exchange:</h3>
      <form onSubmit={handleSubmit}>
        <div className="reason-options">
          <div className='hello'>
          <div className='key'>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              className='radio1'
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            </div>
            <div className='reason-input-option'>
              <div>
              <FaTshirt className='reason-icon'/>
              </div>
              <div >
                <p className='main-content'>Product not needed anymore</p>
                <p>Didn't like the product or ordered by mistake</p>
              </div>
            </div>
            </div>
            <div className='hello'>
          <div className='key'>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              className='radio1'
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            </div>
            <div className='reason-input-option'>
              <div>
              <FaTshirt className='reason-icon'/>
              </div>
              <div >
                <p className='main-content'>Quality Issue</p>
                <p>Poor form/material, finishing or performance</p>
              </div>
            </div>
            </div>
            <div className='hello'>
          <div className='key'>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              className='radio1'
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            </div>
            <div className='reason-input-option'>
              <div>
              <TbRulerMeasure className='reason-icon' /> 
              </div>
              <div >
                <p className='main-content'>Size/Fit Issue</p>
                <p>I got a wrong sizing</p>
              </div>
            </div>
            </div>
            <div className='hello'>
          <div className='key'>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              className='radio1'
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            </div>
            <div className='reason-input-option'>
              <div>
              <IoShirt className='reason-icon'/>
              </div>
              <div >
                <p className='main-content'>Damaged/Used product</p>
                <p>Only valid form for broken products</p>
              </div>
            </div>
            </div>
            <div className='hello'>
          <div className='key'>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              className='radio1'
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            </div>
            <div className='reason-input-option'>
              <div>
              <GrDropbox className='reason-icon'/>
              </div>
              <div >
                <p className='main-content'>Item Missing in the package</p>
                <p>Item missing in product or got less quantity</p>
              </div>
            </div>
            </div>
            <div className='hello'>
          <div className='key'>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              className='radio1'
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            </div>
            <div className='reason-input-option'>
              <div>
              <AiOutlineDropbox className='reason-icon'/>
              </div>
              <div >
                <p className='main-content'>Different Make-up in the package</p>
                <p>Received different shade/color/product from ordered</p>
              </div>
            </div>
            </div>
          </div>
        
      </form>
    </div>
    );
  };
  
  export default ReturnReason;