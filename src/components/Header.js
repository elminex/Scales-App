import React from 'react';
import './Header.scss';
import logo from '../images/logo-mobile.png';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__logo-wrapper">
        <img className="header__logo" src={logo} alt="Logo" />
      </div>
      <h1 className="header__title">
        zaGRAJ <span className="header__title--rotation">w</span>
        <br />
        <span className="header__title--size">GAMY</span>
      </h1>
    </div>
  </header>
);

export default Header;
