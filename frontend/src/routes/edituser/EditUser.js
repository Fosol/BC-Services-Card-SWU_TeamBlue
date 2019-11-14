import React from 'react';
import PropTypes from 'prop-types';
import './EditUser.scss';
import { Form, Button } from 'react-bootstrap';
import Navigation from '../../components/Navigation';
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
            <h1>{this.props.title} <Navigation /></h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text_label">Email address</Form.Label>
                <Form.Control className="text_input" type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group controlId="formBasicFirstName">
                <Form.Label className="text_label">First Name</Form.Label>
                <Form.Control className="text_input" placeholder="firstName" required />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label className="text_label">Last Name</Form.Label>
                <Form.Control className="text_input" placeholder="lastName" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="BC-Gov-PrimaryButton">
                Submit
              </Button>
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

export default EditUser;
