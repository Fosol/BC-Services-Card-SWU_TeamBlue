import React from 'react';
import './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './qsl-sm.png';
import logoUrl2x from './qsl-lg.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="root">
          <div className="container">
            <Navigation />
            <a className="brand" href="www.quartech.com">
              <img
                src={logoUrl}
                srcSet={`${logoUrl2x} 2x`}
                width="38"
                height="38"
                alt="React"
              />
              <span className="brandTxt">Quartech</span>
            </a>
            <div className="banner">
              <h1 className="bannerTitle">BC Services Card</h1>
              <p className="bannerDesc">Team Blue</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
