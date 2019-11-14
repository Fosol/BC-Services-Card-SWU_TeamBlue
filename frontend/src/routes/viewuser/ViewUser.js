import React from 'react';
import PropTypes from 'prop-types';
import './ViewUser.scss';
import Link from '../../components/Link';

class ViewUser extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="viewuser">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <Link className="button" to="/userlist">
              Back
            </Link>
          </div>
        </div>
      </div >
    );
  }
}

export default ViewUser;
