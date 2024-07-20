import React from 'react'
import './navbar.css';
import Rhyno_logo from './Rhyno_Logo.png'
import { Link } from 'react-router-dom';
// import Menubar from './menubar.svg'


const navbar = () => {
  return (
    <div>
        <nav className='Navbar'>
          <img src={Rhyno_logo} alt=''/>
        <ul id='main-menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/AboutUs'>About us</Link></li>
            <li>Product 
                <ul id='submenu'>
                    <li><Link to='/SE03Lite'>SE03 Lite</Link></li>
                    <li><Link to='/SE03'>SE03</Link></li>
                    <li><Link to='/SE03Max'>SE03 Max</Link></li>
                    <li><Link to='/CompareAll'>Compare all</Link></li>
                </ul>
            </li>
            <li><Link to='/ContactUs'>Contact us</Link></li>
            <li><Link to='/PreBook'>Pre-book now</Link></li>
        </ul>
        </nav>
      
    </div>
  )
}

export default navbar
