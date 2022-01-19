import React from 'react';
import MenuPhoto1 from '../assets/manek-singh-DpMzZFt18r0-unsplash.jpg'
import MenuPhoto2 from '../assets/2.jpg'
import MenuPhoto3 from '../assets/3.jpg'
import MenuPhoto4 from '../assets/4.jpg'

const Menu = () => {
  return (
      <div className='menu-component'>
          <div className='menu-table'>
            <div className='menu-photo'>
              <img src={MenuPhoto1} alt='' />
            </div>
            <div className='menu-heading'>
              Order Online
            </div>
          </div>
          <div className='menu-table'>
            <div className='menu-photo'>
              <img src={MenuPhoto2} alt='' />
            </div>
            <div className='menu-heading'>
              Dining
            </div>
          </div>
          <div className='menu-table'>
            <div className='menu-photo'>
              <img src={MenuPhoto3} alt='' />
            </div>
            <div className='menu-heading'>
              Zomato Pro
            </div>
          </div>
          <div className='menu-table'>
            <div className='menu-photo'>
              <img src={MenuPhoto4} alt='' />
            </div>
            <div className='menu-heading'>
              Nightlife and Club
            </div>
          </div>
      </div>
      
  );
};

export default Menu;
