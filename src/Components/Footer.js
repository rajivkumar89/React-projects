import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col-lg-12">
          <p>Copyright © 2036 Scholar Organization. All rights reserved. &nbsp;&nbsp;&nbsp; Design: <Link to="#" rel="nofollow" target="_blank">Rajeev</Link></p> {/* Replaced <a> with <Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
