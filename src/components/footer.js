/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  const content = [
    {
      "heading":"Contact",
      "content":["Facebook","Whatsapp","Siri"]
    },
    {
      "heading":"Contact",
      "content":["Facebook","Whatsapp","Siri"]
    }
];
console.log("content",content[0]?.content[0])
  return (
    <>
      <div className='footer'>
        <h1>Zomato</h1>
        <div className='footer-row'>
          <div className='footer-column'>
            <div><h3>Heading</h3></div>
            <div className='footer-content'>
              <ul>
                <li>{content[0]?.content}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
