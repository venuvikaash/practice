import React, { useState } from 'react';
import Email from './Email';
import Phone from './Phone';
import Mobile from '../assets/mockup.png'
import Play from '../assets/googleplay.png'
import AppStore from '../assets/appstore.svg'

const Contact = () => {
  const [input,setInput] = useState("email");
  return (
  <div className='mobile-mock'>
      <div className='mobile-mock-img'>
        <img src={Mobile} alt="" className='mobile-mock-img-mock' />
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
        <div className=''>
        {input === "email" ? <Email /> : <Phone />}
        </div>
        <div className='mobile-mock-badge'>
          <img src={Play} alt='' className='mobile-mock-badge-img' />
          <img src={AppStore} alt='' className='mobile-mock-badge-img' />
        </div>
      </div>
  </div>
  )
};

export default Contact;
