import React from 'react'
import './footer.css';
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Rhyno_Logo from './Rhyno_Logo.png'
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div id='footer'>
        <div id='rhyno-logo'><img src={Rhyno_Logo} alt=''/></div>
        <div id='links'>
            <Link to='#Privacy policy'>Privacy policy</Link>
            <Link to='#Refund policy'>Refund policy</Link>
            <Link to='#Website policy'>Website policy</Link>
            <Link to='/ContactUs'>Contact us</Link>
            <Link to='/'>Products</Link>
            <Link to='#Career'>Career</Link>
            <Link to='/Rentals'>Rentals</Link>
        </div>
        <div id='logos'>
            <a href='https://www.instagram.com/rhyno.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img src={Instagram} alt='Instagram'/></a>
            <a href='https://in.linkedin.com/company/rhyno-wheels'><img src={Linkedin} alt='Linkedin'/></a>
        </div>
      
    </div>
  )
}
export default footer
