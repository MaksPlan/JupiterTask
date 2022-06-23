import React from 'react';
import style from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.header_container}>
        <div className={style.logo}>
          <img src="img/logo.svg" alt="logo" />
          <h1 className={style.title}>Agency</h1>
        </div>
        <div className={style.nav}>
          <ul>
            <li>About</li>
            <li> Services</li>
            <li>Pricing</li>
            <li> Blog</li>
          </ul>
        </div>
        <div className={style.contact}>
          <h2>CONTACT</h2>
        </div>
      </div>
      <div className={style.portfolio}>
        <div>
          <h3>Portfolio</h3>
        </div>
        <div>
          <p>
            Agency provides a full service range including technical skills, design, business
            understanding.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
