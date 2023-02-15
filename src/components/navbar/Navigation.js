import React, { useEffect, useState } from 'react';

const Navigation = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState('bg-none');

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbar('bg-custom-light');
    } else {
      setNavbar('bg-none');
    }
  };

  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeLogo);
  });
  console.log(navbar);
  return (
    <nav className={`navigation ${navbar}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 h-fit">
            <a href="#" className="logo">
              FutureFlow
            </a>
          </div>
          <div className="col-lg-8 col-md-12 h-fit">
            <div className="navbar-div">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
