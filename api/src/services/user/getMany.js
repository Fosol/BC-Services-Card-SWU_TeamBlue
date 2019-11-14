/* eslint-disable max-len */
import config from 'config';
import log from 'npmlog';
import axios from 'axios';

/**
 * Using the datasource connection pool
 * make a request for all the objects.
 * @export all
 * @param {object} options - Configuration options.
 * @param {string} options.request - Original request.
 * @param {object} options.db - The database connection.
 * @param {object} options.filter - The filter parameters.
 * @param {string} [options.filter.email] - Users email address
 * @param {string} [options.filter.firstName] - Users first name
 * @param {string} [options.filter.lastName] - Users last name
 * @param {string} [options.filter.search] - A String contained in username, first or last name, or email
 * @param {int} [options.filter.max=100] - The maximum number of users to return (defaults: 100)
 * @return {Promise}
 */
export default function(options) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');
  const url = `${keycloakUrl}/admin/realms/${realm}/users`;
  const bearer = options.request.header('Authorization');

  log.info('endpoint', url);
  return axios.get(url, {
    headers: {
      'Authorization': bearer,
    },
  })
      .then((res) => {
        return res.data;
      });
}
