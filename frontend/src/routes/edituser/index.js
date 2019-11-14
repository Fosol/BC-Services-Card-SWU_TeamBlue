import React from 'react';
import Layout from '../../components/Layout';
import EditUser from './EditUser';

const title = 'Edit User';

function action(context, params) {
  console.log("path params");
  console.log(params);
  return {
    chunks: ['edituser'],
    title,
    component: (
      <Layout>
        <EditUser title={title} />
      </Layout>
    ),
  };
}

export default action;
