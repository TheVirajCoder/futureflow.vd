import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <div className="header-content">
          <span className="up">Welcome to</span>
          <span className="down">FutureFlow.</span>
          <button className="header-btn">Visit My Works</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
