import React from 'react';

export default function Footer() {
  return (
    <footer id='contact'>
      <h4>Contact Me</h4>
      <div className='footer-icons'>
        <a href='https://www.linkedin.com/in/ed-estrada/'>
          <img
            src={require('../imgs/linkedin-original.svg')}
            alt='LinkedIn icon'
          />
        </a>
        <a href='mailto: jesus.e.estrada@hotmail.com'>
          <img src={require('../imgs/email.svg')} alt='Email icon' />
        </a>
      </div>
      <p>firstName lastName 2020</p>
    </footer>
  );
}
