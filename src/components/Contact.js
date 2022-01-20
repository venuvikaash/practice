import React, { useState } from 'react';
import Email from './Email';
import Phone from './Phone';

const Contact = () => {
  const [input,setInput] = useState("email");
  return (
  <div className='mobile-mock'>
      <div className='mobile-mock-img'>
        <img src="https://www.transparentpng.com/thumb/-iphone-x/jPIkq8-iphone-glass-lens-screen-replacement-fixez.png" alt="Flat white phone iphone x screen images transparent download @transparentpng.com" />
      </div>
      <div className='mobile-mock-content'>
        <h1>Get the Zomato App</h1>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div className='mobile-mock-radio'>
            <label className='radio-display'>
              <input type="radio" name='E-mail' onClick={() => setInput("email")} />
              <p>E-mail</p>
            </label>
            <label className='radio-display' >
              <input type="radio" name='Phone' onClick={() => setInput("phone")} />
              <p>Phone</p>
            </label>
        </div>
        {input === "email" ? <Email /> : <Phone />}
      </div>
  </div>
  )
};

export default Contact;
