import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Link from '../../components/Link';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="login">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <Link className="button" to="/profile">
              Log In
            </Link>
          </div>
        </div>
      </div >
    );
  }
}

export default Login;
