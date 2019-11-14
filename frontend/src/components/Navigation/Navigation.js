import React from 'react';
import './Navigation.scss';
import { withKeycloak } from 'react-keycloak';

const Navigation = ({ keycloak, keycloakInitialized }) => {
  return (
    <span className="navigation" role="navigation">
      {keycloak.authenticated ?
        <a onClick={() => keycloak.logout()}>> Sign Out</a>
        :
        <span><a onClick={() => keycloak.login()}>Log in</a><span className="spacer"> | </span><a onClick={() => keycloak.login()}>Sign up</a></span>
      }
    </span>
  );
}

export default withKeycloak(Navigation);
