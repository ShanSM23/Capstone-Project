import React from 'react'
import './home.css';
import Img from './vehicle images/img.jpg';
import Rhyno_final from './vehicle images/rhyno final.95.png';
import Grp from './vehicle images/grp.png';
import Final_disign_black from './vehicle images/final design try 2 cross view.178.png';
import Final_desing_red from './vehicle images/final design try 2 side view.151.png';
import Black from './vehicle images/black.png';
import Golden from './vehicle images/golden.png';
import Blue from './vehicle images/blue.png';
import Red from './vehicle images/Copy of Copy of final design try 2 cross view.168.png';
import { Link } from 'react-router-dom';



const home = () => {
  return (
    <div id='home'>
      <div id='tagline'>
        <h1>Let's Elevate Your Ride Experience With Rhyno</h1>
        <div id='animated-text'>
          Where Superiority Meets
          <span></span>
        </div>
      </div>
      <Link to='/PreBook'><button id='Pre-book'>Pre-book Now</button></Link>
      <div id='Vehical-Gallery'>
        <img src={Img} alt=''></img>
        <img src={Rhyno_final} alt=''></img>
        <img src={Grp} alt=''></img>
        <img src={Final_disign_black} alt=''></img>
        <img src={Final_desing_red} alt=''></img>
      </div>
      <div className='Box-container'>

      <div className='container'>
        <div className='carousel'>

          <div className='content first' id='first'>
            <h3>LFP Battery</h3>
            <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
              renowned for their safety features—eliminating the risk of fire associated with other
              Lithium batteries. These batteries boast a broader temperature range, ideal for the
              diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
              by an Active Balancing Smart Battery Management System (BMS) for extended life
              and reduced maintenance. Each battery undergoes rigorous waterproofing tests
              according to IP76 standards. But it doesn't stop there—our technology goes the extra
              mile in ensuring the battery's lasting durability. Connect with us to discover the
              thoughtful engineering behind our batteries!</p>
          </div>
          <div className='content second' id='second'>
            <h3>Wider tyres</h3>
            <p>Now, say goodbye to skidding and embrace the leaning turns!
              Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
              beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
          </div>
          <div className='content third' id='third'>
            <h3>Range prediction</h3>
            <p>Many budget-friendly electric scooters overlook this crucial
              feature, causing riders to experience range anxiety. With Rhyno, you can ride with
              peace of mind, thanks to the scooter providing precise information about the
              remaining battery.
            </p>
          </div>
          <div className='content forth' id='forth'>
            <h3>Extraordinery Experience</h3>
            <p>Rhyno is more than just a mode of transportation. It is
              an experience of sheer comfort and style! A seamless fusion of minimalism,
              sophistication, and a touch of masculinity!</p>
          </div>
          <div className='content fifth' id='fifth'>
            <h3>Rugged and simple Design</h3>
            <p> We’ve had enough of the EVs looking and feeling like
              fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
              ending up spending weeks and months at service stations for complex repairs. We
              took a bold step of making something raw, rugged, and practical. We kept it so
              simple that even your trusted local mechanic can understand and repair most of it. If
              you have reached this far, why not to take a test ride? Click here to locate your
              nearest dealership or book a test ride at your home!</p>
          </div>
        </div>
      </div>
      </div>

      <h2>Our Products</h2>
      <div id='Products'>
        <div className='Product_div'>
          <div className='flexed'><img src={Black} alt=''></img><Link to='/SE03'><button className='checkout'>Checkout</button></Link></div>
          <div className='flexed'><img src={Golden} alt=''></img><Link to='/SE03Lite'><button className='checkout'>Checkout</button></Link></div>
        </div>
        <div className='Product_div'>
          <div className='flexed'><img src={Blue} alt=''></img><Link to='/SE03Max'><button className='checkout'>Checkout</button></Link></div>
          <div className='flexed'><img src={Red} alt=''></img><Link to='/SE03Max'><button className='checkout'>Checkout</button></Link></div>
        </div>
      </div>

    </div>

  )
}
export default home
