import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
import Header from './Header';

function Services() {
  return (
    <>
      <Header />
      <div className="services section" id="services">
        <h2>Our Services</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img src="/service-01.png" alt="Online Degrees" />
                </div>
                <div className="main-content">
                  <h4>Online Degrees</h4>
                  <p>Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
                  <div className="main-button">
                    <Link to="#">Read More</Link> {/* Using Link instead of <a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img src="/service-02.png" alt="Short Courses" />
                </div>
                <div className="main-content">
                  <h4>Short Courses</h4>
                  <p>You can browse free templates based on different tags such as digital marketing, etc.</p>
                  <div className="main-button">
                    <Link to="#">Read More</Link> {/* Using Link instead of <a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img src="/service-03.png" alt="Web Experts" />
                </div>
                <div className="main-content">
                  <h4>Web Experts</h4>
                  <p>You can start learning HTML CSS by modifying free templates from our website too.</p>
                  <div className="main-button">
                    <Link to="#">Read More</Link> {/* Using Link instead of <a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
