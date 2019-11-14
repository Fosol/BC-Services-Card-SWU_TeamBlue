import React from 'react';
import cx from 'classnames';
import './Navigation.scss';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation" role="navigation">
        <div className="root" role="navigation">
        <Link className={cx("link", "highlight")} to="/register">
            Sign up
        </Link>
          <span className="spacer"> | </span>
          <Link className="link" to="/login">
            Log in
        </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
