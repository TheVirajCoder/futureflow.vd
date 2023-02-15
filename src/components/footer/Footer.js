import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="container">
        <div className="footer-main d-flex flex-wrap justify-content-between">
          <div>@FutureFlow</div>
          <div className="d-flex flex-wrap">
            <a href="#">
              <div className="logo">
                <i className="fa fa-facebook"></i>
              </div>
            </a>
            <a href="#" className="mx-2">
              <div className="logo">
                <i className="fa fa-instagram"></i>
              </div>
            </a>
            <a href="#">
              <div className="logo">
                <i className="fa fa-twitter"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
