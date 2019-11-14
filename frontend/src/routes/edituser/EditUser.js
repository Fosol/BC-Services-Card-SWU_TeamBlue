import React from 'react';
import PropTypes from 'prop-types';
import './EditUser.scss';
import Link from '../../components/Link';

class EditUser extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="edituser">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <Link className="button" to="/userlist">
              Submit
            </Link>
          </div>
        </div>
      </div >
    );
  }
}

export default EditUser;
