import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import { Form, Button } from 'react-bootstrap';
import Link from '../../components/Link';
import { useKeycloak } from 'react-keycloak';
import Navigation from '../../components/Navigation';

const Profile = (props) => {
  const [keycloak, initialized] = useKeycloak();
  const [user, setUser] = useState({ user: {} });
  useEffect(() => {
    keycloak.loadUserProfile().success(() => {
      setUser(keycloak.profile);
    });
  }, []);
  return (
    <div className="profile">
      <div className="root">
        <div className="container">
          <h1>{props.title} <Navigation /></h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text_label">Email address</Form.Label>
              <Form.Control className="text_input" type="email" placeholder={user.email} required />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label className="text_label">First Name</Form.Label>
              <Form.Control className="text_input" placeholder={user.firstName} required />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label className="text_label">Last Name</Form.Label>
              <Form.Control className="text_input" placeholder={user.lastName} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="BC-Gov-PrimaryButton">
              Update
              </Button>
          </Form>

          <Link className="button" to="/userlist">
            User List
            </Link>
        </div>
        <div>
        </div>
      </div>
    </div >
  )
}

export default Profile;
