import React from 'react';
import './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span className="text">© Quartech</span>
        <span className="spacer">·</span>
        <Link className="link" to="/">
          Home
          </Link>
        <span className="spacer">·</span>
      </div>
    );
  }
}

export default Footer;
