import React from 'react'
import './ContactUs.css';
import Rhyno_final_design from './vehicle images/final design try 2 cross view.178.png';
import Mail_Logo from './mail.svg';
import Mobile_Logo from './mobile.svg';
import Location_Logo from './location.svg';

const ContactUs = () => {
  return (
    <div>
        <section className="product">
                <div className="head">
                    <div className="product-info">
                        <h2>RHYNO EV</h2>
                        <p className="description">For more information, contact us without any hesitation!</p>
                    </div>
                    <div className="product-image">
                        <img src={Rhyno_final_design} alt="Rhyno Ev"></img>
                    </div>
                </div>
            </section>
            <h1>Contact Us</h1>
            <section className='ContactUs'>
                <img src={Mail_Logo} alt='Mail'></img>
                <p><b>Mail:</b> info@rhyno.in</p>
            </section>
            <section className='ContactUs'>
                <img src={Mobile_Logo} alt='Mobile'></img>
                <p><b>Mobile no.:</b> +91-9023987528</p>
            </section>
            <section className='ContactUs'>
                <img src={Location_Logo} alt='Location'></img>
                <p><b>Location:</b> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
                Raisan, Gandhinagar, Gujarat, India.</p>
            </section>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.48136429913!2d72.65846757509367!3d23.079468279133824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8104a2624a59%3A0xca70c45ced2861c3!2sRhyno%20Flexipack%20Industries!5e0!3m2!1sen!2sin!4v1719678164076!5m2!1sen!2sin" width="800" height="600"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Address' id='Address'></iframe>
            </div>
      
    </div>
  )
}

export default ContactUs
