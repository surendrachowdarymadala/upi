import React, { useState } from 'react';
import '../css/reason.css'
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
          <label>
            <input
              type="radio"
              name="reason"
              value="not_needed"
              checked={selectedReason === 'not_needed'}
              onChange={handleReasonChange}
            />
            <div className='reason-input-option'>
              <div>
              <FaTshirt className='reason-icon'/>
              </div>
              <span className='reason-content-option'>
                <p className='main-content'>Product not needed anymore</p>
                <p>Didn't like the product or ordered by mistake</p>
              </span>
            </div>
            </label>
          {/* <hr className='hr-tag-reason' /> */}
          <label>
            <input
              type="radio"
              name="reason"
              value="quality_issue"
              checked={selectedReason === 'quality_issue'}
              onChange={handleReasonChange}
            />
            <div className='reason-input-option'>
              <span>
              <BsShieldFillExclamation className='reason-icon'/>
              </span>
              <span className='reason-content-option'>
                <p className='main-content'>Quality Issue</p>
                <p>Poor form/material, finishing or performance</p>
              </span>
            </div>
          </label>
          {/* <hr className='hr-tag-reason'/> */}
          <label>
            <input
              type="radio"
              name="reason"
              value="size_fit_issue"
              checked={selectedReason === 'size_fit_issue'}
              onChange={handleReasonChange}
            />
            <div className='reason-input-option'>
              <span>
              <TbRulerMeasure className='reason-icon' /> 
              </span>
              <span className='reason-content-option'>
                <p className='main-content'>Size/Fit Issue</p>
                <p>I got a wrong sizing</p>
              </span>
            </div>
          </label>
          {/* <hr className='hr-tag-reason'/> */}
          <label>
            <input
              type="radio"
              name="reason"
              value="damaged_product"
              checked={selectedReason === 'damaged_product'}
              onChange={handleReasonChange}
            />
            <div  className='reason-input-option'>
              <span>
              <IoShirt className='reason-icon'/>
              </span>
              <span className='reason-content-option'>
              <p className='main-content'>Damaged/Used product</p>
              <p>Only valid form for broken products</p>
              </span>
            </div>
           </label>
          {/* <hr className='hr-tag-reason'/> */}
          <label>
            <input
              type="radio"
              name="reason"
              value="item_missing"
              checked={selectedReason === 'item_missing'}
              onChange={handleReasonChange}
            />
            <div className='reason-input-option'>
              <span>
              <GrDropbox className='reason-icon'/>
              </span>
              <span className='reason-content-option'>
                <p className='main-content'>Item Missing in the package</p>
                <p>Item missing in product or got less quantity</p>
              </span>
            </div>
          </label>
          {/* <hr className='hr-tag-reason'/> */}
          <label>
            <input
              type="radio"
              name="reason"
              value="different_makeup"
              checked={selectedReason === 'different_makeup'}
              onChange={handleReasonChange}
            />
            <div className='reason-input-option'>
              <span>
              <AiOutlineDropbox className='reason-icon'/>
              </span>
              <span className='reason-content-option'>
              <p className='main-content'>Different Make-up in the package</p>
              <p>Received different shade/color/product from ordered</p>
              </span>
            </div>
            </label>
          {/* <hr className='hr-tag-reason'/> */}

          </div>
        <button type="Continue" className="continue-btn">Continue</button>
      </form>
    </div>
  );
};

export default ReturnReason;