import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
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
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Home">About</a>
                </li>
                <li>
                  <a href="#Home">Portfolio</a>
                </li>
                <li>
                  <a href="#Home">Testmonial</a>
                </li>
                <li>
                  <a href="#Home">Contact</a>
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
