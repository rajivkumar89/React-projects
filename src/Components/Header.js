import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link to="/" className="logo"> {/* Use Link for navigation */}
                <h1>Scholar</h1>
              </Link>

              {/* Search Input */}
              <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                  />
                  <i class="fas fa-search"></i>
                </form>
              </div>

              {/* Navigation Links */}
              <ul className="nav">
              <li className="scroll-to-section">
                  <Link to="/">Home</Link> {/* Use Link for navigation */}
                </li>
                <li className="scroll-to-section">
                  <Link to="/services">Services</Link> {/* Use Link for navigation */}
                </li>
           
                <li className="scroll-to-section">
                  <Link to="/team">Team</Link>
                </li>
            
                <li className="scroll-to-section">
                  <Link to="/register">Register Now!</Link>
                </li>
              </ul>

              {/* Menu Trigger */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
