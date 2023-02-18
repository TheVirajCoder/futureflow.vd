import React from 'react';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="overlay">
        <div className="header-content">
          <span className="up">Welcome to</span>
          <span className="down">FutureFlow.</span>
          <a className="header-btn" href="#portfolio">
            Visit Our Works
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
