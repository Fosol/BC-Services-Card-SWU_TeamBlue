import React from 'react';
import './UnAuth.scss';
import { withKeycloak } from 'react-keycloak';

const UnAuth = ({ keycloak, keycloakInitialized }) => {

  return (
    <div className="unauth">
      <h1>Welcome! Connect to Start</h1>
      <div>
        <span>
          <a className="button" onClick={() => keycloak.login()}>
            Log in
            </a>
          <a className="button" onClick={() => keycloak.login()}>
            Sign up
        </a>
        </span>
      </div>
    </div>
  );
}

export default withKeycloak(UnAuth);
