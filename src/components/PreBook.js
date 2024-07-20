import React from 'react'
import './PreBook.css';
import Grp from './vehicle images/grp.png';

const PreBook = () => {
  return (
    <div>
        <main>
        <section className="product">
            <div className="head">
                <div className="product-info">
                    <h2>RHYNO EV</h2>
                    <p className="description">PreBook Rhyno EV and Secure your order today!</p>
                    <p className="price">Price: $XXX</p>
                </div>
                <div className="product-image">
                    <img src={Grp} alt="Rhyno Ev"></img>
                </div>
            </div>
        </section>

        <section className="booking-form">
            <div className="container">
                <form action="payment_process.php" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Additional Notes:</label>
                        <textarea id="notes" name="notes" rows="3"></textarea>
                    </div>
                    <button type="submit">Proceed to Payment</button>
                </form>
            </div>
        </section>
    </main>
      
    </div>
  )
}

export default PreBook