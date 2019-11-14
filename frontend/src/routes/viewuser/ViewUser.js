import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ViewUser.scss';
import Link from '../../components/Link';
import Navigation from '../../components/Navigation';

class ViewUser extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const user = this.props.user;
    return (
      <div className="viewuser">
        <div className="root">
          <div className="container">
            <h1>{this.props.title} <Navigation /></h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Text type="email">{user.email}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Text>{user.firstName}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Text>{user.lastName}</Form.Text>
              </Form.Group>
              <Link className="BC-Gov-PrimaryButton" to="/edituser">
                Edit
              </Link>
              <Link className="BC-Gov-PrimaryButton" to="/userlist">
                User List
              </Link>
            </Form>
          </div>
        </div>
      </div >
    );
  }
}

export default ViewUser;
