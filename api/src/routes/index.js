import home from './home';
import auth from './auth';
import user from './user';

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
  app.use(['/', '/api/'], home);
  app.use(['/auth', '/api/auth'], auth(options));
  app.use(['/user', '/api/user'], options.keycloak.protect(), user(options));
  app.use(['/test', '/api/test'], user(options));
}
