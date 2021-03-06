import React from 'react';
import Layout from '../../components/Layout';
import Profile from './Profile';

const title = 'Profile';

function action() {
  console.log("authstate");
  return {
    chunks: ['profile'],
    title,
    component: (
      <Layout>
        <Profile title={title} />
      </Layout>
    ),
  };
}

export default action;
