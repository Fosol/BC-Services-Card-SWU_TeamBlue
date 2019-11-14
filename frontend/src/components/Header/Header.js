import React from 'react';
import './Header.scss';
import Link from '../Link';

import logoUrl from './logo-banner.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="banner">
          <a href="https://gov.bc.ca" alt="British Columbia">
              <img
                src={logoUrl}
                width="110"
                height="68"
                alt="Go to the Government of British Columbia website"
              />
          </a>
          <h1>BC Services Card</h1>
        </div>
        <div className="other">
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Header;
