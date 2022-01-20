import React from 'react';
import NextIcon from '../assets/next.svg'
import Briyani from '../assets/briyani.jpg'
import Chennai from '../assets/chennai.jpg'
import Pizza from '../assets/pizza.jpg'
import Ice from '../assets/ice.jpg'

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
                  <div className='overflow'>
                  <img src={Pizza} alt='' className='collection-card-img-pizza' />
                  <section className='background-linear-pizza'>
                  <div className='background-linear-content'>
                        <h3>Trending this Week</h3>
                        <p>30 Places</p>
                      </div>
                  </section>
                  </div>
                </div>
                <div className='collection-card'>
                  <div className='overflow'>
                    <img src={Chennai} alt='' className='collection-card-img-chennai' />
                    <section className='background-linear'>
                      <div className='background-linear-content'>
                        <h3>Best of Chennai</h3>
                        <p>78 Places</p>
                      </div>
                    </section>
                  </div>
                </div>
                <div className='collection-card'>
                  <div className='overflow'>
                  <img src={Ice} alt='' className='collection-card-img-ice' />
                  <section className='background-linear'>
                  <div className='background-linear-content'>
                        <h3>Frozen Delights</h3>
                        <p>14 Places</p>
                      </div>
                  </section>
                  </div>
                </div>
                <div className='collection-card'>
                  <div className='overflow'>
                  <img src={Briyani} alt='' className='collection-card-img-one' />
                  <section className='background-linear'>
                  <div className='background-linear-content'>
                        <h3>Brilliant Briyanis</h3>
                        <p>13 Places</p>
                      </div>
                  </section>
                  </div>
                </div>
              </div>
          </div>
      </div>
  );
};

export default Collections;
