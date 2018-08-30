import React from 'react';
import './Footer.css';
import twitter from './twitter.png';
import google from './google.png';
import skype from './skype.png';


const Footer = (props) => {
  return (
    <footer>
      <span className="Footer-message">I'VE GOT SOUL BUT I"M NOT A SOLDIER</span>
      <div className="Footer-socialMedia">
        <img src={google} alt="Visit my Google+"/>
        <img src={twitter} alt="Visit my Twitter"/>
        <img src={skype} alt="Call me on Skype"/>
      </div>
    </footer>
  );
}

export default Footer;

//Dodac link przed img albo onClick do img