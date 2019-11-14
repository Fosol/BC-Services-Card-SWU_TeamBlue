import React from 'react';
import PropTypes from 'prop-types';
import './UserList.scss';
import Link from '../../components/Link';

class UserList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="userlist">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <div>
            <Link className="button" to="/edituser">
              Edit User
            </Link>
            </div>
            <div>
            <Link className="button" to="/viewuser">
              View User
            </Link>
            </div>
            <a className="button">
              Delete User
            </a>
          </div>
        </div>
      </div >
    );
  }
}

export default UserList;
