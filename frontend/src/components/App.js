import React from 'react';
import PropTypes from 'prop-types';

import ApplicationContext from './ApplicationContext';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';
const keycloak = new Keycloak({
  url: 'http://localhost:8180/auth',
  realm: 'bcsc-swu',
  clientId: 'team-blue-app'
});

const ContextType = {
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object,
};

class App extends React.PureComponent {
  static propTypes = {
    // Enables critical path CSS rendering
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { context } = this.props;

    return (
      <KeycloakProvider keycloak={keycloak}>
        <ApplicationContext.Provider value={{ context }}>
          {React.Children.only(this.props.children)}
        </ApplicationContext.Provider>
      </KeycloakProvider>
    );
  }
}

export default App;
