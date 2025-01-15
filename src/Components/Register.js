import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or backend)
    console.log(formData);
  };

  return (
    <div className="contact-us section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h6>Contact Us</h6>
              <h2>Feel free to contact us anytime</h2>
              <p>Thank you for choosing our templates. We provide you the best CSS templates absolutely free of charge. You may support us by sharing our website with your friends.</p>
              <div className="special-offer">
                <span className="offer">off<br /><em>50%</em></span>
                <h6>Valid until: <em>24 April 2036</em></h6>
                <h4>Special Offer <em>50%</em> OFF!</h4>
                <Link to="#"><i className="fa fa-angle-right"></i></Link> {/* Replaced <a> with <Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-content">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
