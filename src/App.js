import React from'react';
import './App.css';
import { Button } from '@material-ui/core';
import './accordian';
import SimpleAccordion from './accordian';
import SimpleAccordion2 from './accordion2';

function App() {
  return (
    <div id="root">
      <div className="main">
        <div className="headcontainer">
          <img src="../images/download.png" alt="logo"></img>
         
          <ul>
            <li><a href="#home">HOW TO USE</a></li>
            <li><a href="#news">ABOUT US</a></li>
            <li><a href="#news">CONTACT US</a></li>
  
            </ul>
        <li><a href="#news" className="login">LOGIN</a></li>
        <Button variant="contained" color="primary" className="but">
          Primary</Button>
        </div>
        <div className="content"></div>
        <h1>ABOUT US</h1>
        <p>ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both</p>
        <p>technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after</p>
        <p>identifying the plight of hapless smartphone customers and the inefficiency of the service centers.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <lb></lb>
        <p className="p2">How Etark helps  costumer?</p>
        <h3>Resolving Technical problems:</h3>
        <p>Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a</p>
        <p>smartphone lets you stay connected with the world and manage all your electronic records. The current</p>
        <p className="p3">approaches that a user usually takes :</p>
        <div className="accordion">
        <SimpleAccordion></SimpleAccordion>
        
        </div>
        <h3 className="p4">Resolving non-technical problems :</h3>
        <p>Problems like missing, damaged or duplicate items during purchase or Payment related issues like improper bill,</p>
        <p>wrongful deductions etc are some of the examples of non- technical problems that customers face.
</p>
<p>
The ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device
</p>
<p>manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the</p>
<p>other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and</p>
<p>share certain reports with him/ her which can help identify the merit of the complaint/ grievance.</p>
       <div className="accordion">
         <SimpleAccordion2></SimpleAccordion2>
       </div>
     </div>
    </div>
  );
}

export default App;
