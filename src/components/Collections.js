import React from 'react';
import NextIcon from '../assets/next.svg'
import Briyani from '../assets/briyani.jpg'
import Chennai from '../assets/chennai.jpg'
import Pizza from '../assets/pizza.jpg'

const Collections = () => {
  return (
      <div className='collection-container'>
          <div className='collection-content'>
              <div className='collection-content-heading'>
                  <h1>Collections</h1>
              </div>
              <div className='collection-content-top'>
                  <div className='collection-content-p'>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</p>
                  </div>
                  <div className='collection-forward'>
                    <div><p>All Collections in Chennai</p></div>
                    <i className='collection-forward-img'>
                        <img src={NextIcon} alt='' className='collection-forward-img' />
                      </i>
                  </div>
              </div>
              <div className='collection-content-bottom'>
                <div className='collection-card'>
                  <img src={Pizza} alt='' className='collection-card-img-pizza' />
                  {/* <section className='collection-card-content'>Hello</section> */}
                </div>
                <div className='collection-card'>
                  <img src={Chennai} alt='' className='collection-card-img-chennai' />
                </div>
                <div className='collection-card'>
                  <img src={Pizza} alt='' className='collection-card-img-pizza' />
                </div>
                <div className='collection-card'>
                  <img src={Briyani} alt='' className='collection-card-img-one' />
                </div>
              </div>
          </div>
      </div>
  );
};

export default Collections;
