import React from 'react'
import './headerNav.css';


function HeaderNav(props) {
    return (
      <header className="header__container">
        <div className="wrapper">
          <img
            src="https://www.simplestickynotes.com/resources/images/simple-sticky-notes-logo.png"
            alt="logo"
            className="header__logo"
          />
          <div className="header__title">
            <h1>Sticky Note</h1>
            <p>Your one stop space for your notes...</p>
          </div>
        </div>
      </header>
    );
}

export default HeaderNav;
