import React from 'react';
import Layout from '../../components/Layout';
import ViewUser from './ViewUser';

const title = 'View User';

async function action(context) {
  const resp = await fetch('/localhost:8081/bcsc-swu/users?username=' + context.query.userId, {});
  const mockUser = {
    firstName: 'test',
    lastName: 'test',
    email: 'test@test.ca'
  }
  console.log(context.query.userId);
  return {
    chunks: ['viewuser'],
    title,
    component: (
      <Layout>
        <ViewUser title={title} user={mockUser} />
      </Layout>
    ),
  };
}

export default action;
