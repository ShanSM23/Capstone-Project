import React from 'react'
import './AboutUs.css';
import Rhyno_final from './vehicle images/rhyno final.95.png';

const AboutUs = () => {
    return (
        <div className='main'>
            <section className="product">
                <div className="head">
                    <div className="product-info">
                        <h2>RHYNO EV</h2>
                        <p className="description">Let we introduce ourself!</p>
                    </div>
                    <div className="product-image">
                        <img src={Rhyno_final} alt="Rhyno Ev"></img>
                    </div>
                </div>
            </section>
                <h1>About Us</h1>
            <section className='AboutUs'>
                <p>Established in 2019 by an automotive engineer with a vision for sustainable and robust
                    mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
                    of young individuals passionately driving innovation in the electric vehicle industry. We
                    believe in engineering solutions that solve problems.</p>
            </section>
            <section className='AboutUs'>
                <p>
                    With our first product, we've taken a bold step to create something more than just a vehicle;
                    it's a unique experience of elegance, comfort and style, addressing the pitfalls of
                    conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
                    ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
                    operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
                    appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
                    era in sustainable and dependable electric transportation.</p>
            </section>

        </div>
    )
}

export default AboutUs
