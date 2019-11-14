import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import { Form } from 'react-bootstrap';
import Link from '../../components/Link';

class Profile extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="profile">
        <div className="root">
          <div className="container">
            <h1>{this.props.title}</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text_label">Email address</Form.Label>
                <Form.Control className="text_input" type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label className="text_label">First Name</Form.Label>
                <Form.Control className="text_input" placeholder="firstName" />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label className="text_label">Last Name</Form.Label>
                <Form.Control className="text_input" placeholder="lastName" />
              </Form.Group>
            </Form>
            <Link className="button" to="/userlist">
              User List
            </Link>
          </div>
          <div>
          </div>
        </div>
      </div >
    );
  }
}

export default Profile;
