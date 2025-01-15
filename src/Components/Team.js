import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function Team() {
  return (
    <div className="team section" id="team">
      <h2>Our Team</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-member">
              <div className="main-content">
                <img src="/member-01.jpg" alt="Sophia Rose"/>
                <span className="category">UX Teacher</span>
                <h4>Sophia Rose</h4>
                <ul className="social-icons">
                  <li><Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-member">
              <div className="main-content">
                <img src="/member-02.jpg" alt="Cindy Walker"/>
                <span className="category">Graphic Teacher</span>
                <h4>Cindy Walker</h4>
                <ul className="social-icons">
                  <li><Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-member">
              <div className="main-content">
                <img src="/member-03.jpg" alt="David Hutson"/>
                <span className="category">Full Stack Master</span>
                <h4>David Hutson</h4>
                <ul className="social-icons">
                  <li><Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="team-member">
              <div className="main-content">
                <img src="/member-04.jpg" alt="Stella Blair"/>
                <span className="category">Digital Animator</span>
                <h4>Stella Blair</h4>
                <ul className="social-icons">
                  <li><Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
