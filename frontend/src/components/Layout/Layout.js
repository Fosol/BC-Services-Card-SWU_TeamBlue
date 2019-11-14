import React from 'react';
import PropTypes from 'prop-types';
import { useKeycloak } from 'react-keycloak';
// external-global styles must be imported in your JS.
import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';
import UnAuth from '../UnAuth';

const Layout = (props) => {
  const [keycloak, initialized] = useKeycloak();
  return (
    <div className="layout">
      <Header />
      {keycloak.authenticated ? props.children : <UnAuth></UnAuth>}
      <Footer />
    </div>
  );
}

export default Layout;
