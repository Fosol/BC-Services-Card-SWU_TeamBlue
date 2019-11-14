import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './UserList.scss';
import Link from '../../components/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import history from '../../history';
import Navigation from '../../components/Navigation';

const UserList = (props) => {
  const users = props.users;
  const [show, setShow] = useState(false);
  const [userToDelete, setUserToDelete] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteUser = () => {
    console.log("delete user" + JSON.stringify(userToDelete));
    setUserToDelete({});
    handleClose();
  }

  const getUri = (baseUri, user) => {
    return baseUri + "?userId=" + user.username;
  }

  return (
    <div className="userlist">
      <div className="root">
        <div className="container">
          <h1>{props.title}<Navigation />
          </h1>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <p>Are you sure you want to permanently delete the selected user account?</p>
              <small>This user account will be deleted immediately. you cannot undo this action</small>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" style={{backgroundColor: 'grey'}} onClick={handleClose}>Cancel</Button>
              <Button variant="primary" style={{backgroundColor: 'red'}} onClick={deleteUser}>Delete</Button>
            </Modal.Footer>
          </Modal>
          <table>
            <thead className="nowrap">
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Registration Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="nowrap">
              {users.map(user => {
                return (
                  <tr key={user.username}>
                    <td onClick={() => history.push(getUri("/viewUser", user))}>{user.email}</td>
                    <td onClick={() => history.push(getUri("/viewUser", user))}>{user.role}</td>
                    <td onClick={() => history.push(getUri("/viewUser", user))}>{user.registrationDate}</td>
                    <td>
                      <span className="nowrap">
                        <Link className="button" to={getUri("/editUser", user)}>
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Link>
                        <a className="button" onClick={() => { setUserToDelete(user); handleShow(); }}>
                          <FontAwesomeIcon icon={faTrash} />
                        </a>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}

export default UserList;
