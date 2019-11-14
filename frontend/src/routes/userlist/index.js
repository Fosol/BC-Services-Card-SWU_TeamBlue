import React from 'react';
import Layout from '../../components/Layout';
import UserList from './UserList';

const title = 'User List';
const mockUsers = [{
  username: 1,
  email: "test@test.ca",
  role: "test",
  registrationDate: "test",
}, {
  username: 2,
  email: "test@test.ca",
  role: "test",
  registrationDate: "test",
}, {
  username: 3,
  email: "test@test.ca",
  role: "test",
  registrationDate: "test",
}, {
  username: 4,
  email: "test@test.ca",
  role: "test",
  registrationDate: "test",
}, {
  username: 5,
  email: "test@test.ca",
  role: "test",
  registrationDate: "test",
},];

async function action() {
  const resp = await fetch('/localhost:8081/bcsc-swu/users', {});
  //const { users } = await resp.json();
  const users = mockUsers;
  if (!users ) throw new Error('Failed to load the users list');
  return {
    chunks: ['userlist'],
    title,
    component: (
      <Layout>
        <UserList title={title} users={users} />
      </Layout>
    ),
  };
}

export default action;
