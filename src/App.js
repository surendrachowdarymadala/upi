// import logo from './logo.svg';
import './App.css';
// import Edit from './components/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './components/Edit';
import Buyeraddress from './components/Buyeraddress';

import BuyCancil from './components/BuyCancil';
import CancilSuccessful from './components/CancilSuccessful';
import PaymentOption from './components/PaymentOption';
import Trackorder1 from './components/Trackorder1';
import Addnewaddress from './components/Addnewaddress';
import Reason from './components/Reason';
import ReturnReason from './components/reason11';
import Trackorder2 from './components/Trackorder2';
import AddressPage from './components/Address1';
import Editprofile from './components/Editprofile';




function App() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Edit/>}/>
      <Route path="/buyeraddress"  element={<Buyeraddress/>}/>
     
      <Route path='/cancil' element={<BuyCancil/>}/>
      <Route path='/csuccessful' element={<CancilSuccessful/>}/>
      <Route path='/track' element={<Trackorder1/>}/>
      <Route path='/addaddress' element={<Addnewaddress/>}/>
      <Route path='/reason' element={<Reason/>}/>
      <Route path='/reason11' element={<ReturnReason/>}/>
      <Route path='/track2' element={<Trackorder2/>}/>
      <Route path='/address' element={<AddressPage/>}/>
      <Route path='/editprofile' element={<Editprofile/>}/>

        {/* <Route index element={<Home />} />
       
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}      
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
