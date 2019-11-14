import React from 'react';
import PropTypes from 'prop-types';
import './Register.scss';
import Link from '../../components/Link';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="register">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <Link className="button" to="/profile">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
