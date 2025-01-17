import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";  // Importing Link from react-router-dom
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Register from "./Register";
const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container">
          <Slider {...settings}>
            <div className="item item-1">
              <div className="header-text">
                <span className="category">Our Courses</span>
                <h2>With Scholar Teachers, Everything Is Easier</h2>
                <p>Scholar is a free CSS template designed by TemplateMo for online educational websites. This layout is based on the famous Bootstrap v5.3.0 framework.</p>
                <div className="buttons">
                  <div className="main-button">
                    <Link to="#">Request Demo</Link>  {/* Replaced <a> with <Link> */}
                  </div>
                  <div className="icon-button">
                    <Link to="#"><i className="fa fa-play"></i> What's Scholar?</Link>  {/* Replaced <a> with <Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-2">
              <div className="header-text">
                <span className="category">Best Result</span>
                <h2>Get the best result out of your effort</h2>
                <p>You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.</p>
                <div className="buttons">
                  <div className="main-button">
                    <Link to="#">Request Demo</Link>  {/* Replaced <a> with <Link> */}
                  </div>
                  <div className="icon-button">
                    <Link to="#"><i className="fa fa-play"></i> What's the best result?</Link>  {/* Replaced <a> with <Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-3">
              <div className="header-text">
                <span className="category">Online Learning</span>
                <h2>Online Learning helps you save time</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse.</p>
                <div className="buttons">
                  <div className="main-button">
                    <Link to="#">Request Demo</Link>  {/* Replaced <a> with <Link> */}
                  </div>
                  <div className="icon-button">
                    <Link to="#"><i className="fa fa-play"></i> What's an Online Course?</Link>  {/* Replaced <a> with <Link> */}
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Services />
      <About />
      <Team />
      <Register />
    </div>
  );
};

export default HeroSection;
