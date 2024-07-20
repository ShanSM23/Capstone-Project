import React from 'react'
import './Rentals.css';
import Grp from './vehicle images/grp.png';
import Android from './Android.svg';
import Apple from './Apple.svg';

const Rentals = () => {
  return (
    <div>
        <section className="product">
                <div className="head">
                    <div className="product-info">
                        <h2>RHYNO EV</h2>
                        <p className="description">Want a Ride?<br/>Check out for our rentals!</p>
                    </div>
                    <div className="product-image">
                        <img src={Grp} alt="Rhyno Ev"></img>
                    </div>
                </div>
            </section>
            <h1>Rentals</h1>
            <section className='Rentals'>
                <p>Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
                </p>
            </section>
            <section className='Rentals'>
                <p>Additionally, we're redefining campus commuting with our rental fleet tailored for college                   students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.</p>
            </section>
            <div className='icon'>
                <p><b>Download our rental app:</b></p>
                <a href='#Android'><button><img src={Android} alt='Android'></img></button></a>
                <a href='#Apple'><button><img src={Apple} alt='Apple'></img></button></a>

            </div>
      
    </div>
  )
}

export default Rentals
