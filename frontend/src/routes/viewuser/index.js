import React from 'react';
import Layout from '../../components/Layout';
import ViewUser from './ViewUser';

const title = 'View User';

function action() {
  return {
    chunks: ['viewuser'],
    title,
    component: (
      <Layout>
        <ViewUser title={title} />
      </Layout>
    ),
  };
}

export default action;
