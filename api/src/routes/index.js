import home from './home';
import auth from './auth';
import user from './user';
import keycloak from './keycloak';

/**
 * Provides a way to control routes to endpoints.
 * @function router
 * @param {object} options - The configuration options.
 * @param {object} options.app - The express app.
 * @param {object} options.db - The client connection.
 * @param {object} options.keycloak - The keycloak configuration.
 * @return {void}
 */
export default function(options) {
  const app = options.app;
  app.use(['/api', '/'], home);
  app.use(['/api/auth', '/auth'], auth(options));
  app.use(['/api/user', '/user'],
      options.keycloak.protect('realm:contributor'),
      user(options));
  app.use(['/api/profile', '/profile'],
      options.keycloak.protect(),
      keycloak(options));
}
