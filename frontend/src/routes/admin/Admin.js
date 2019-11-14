import React from 'react';
import PropTypes from 'prop-types';
import './Admin.scss';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="admin">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <p>...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
