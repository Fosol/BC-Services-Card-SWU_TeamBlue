import React from 'react';
import Layout from '../../components/Layout';
import UserList from './UserList';

const title = 'User List';

function action() {
  return {
    chunks: ['userlist'],
    title,
    component: (
      <Layout>
        <UserList title={title} />
      </Layout>
    ),
  };
}

export default action;
