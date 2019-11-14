/* eslint max-len: ["error", { "ignoreStrings": true }]*/
import config from 'config';
import axios from 'axios';
import log from 'npmlog';

/**
 * Using the client connection pool, connect to the datasource
 * and delete the specified object.
 * @function remove
 * @param  {string} id - The model id.
 * @param {object} options - Configuration options.
 * @param {string} options.request - Original request.
 * @param  {object} options.db - The datasource client.
 * @return {Promise}
 */
export default function(id, options) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');
  const url = `${keycloakUrl}/admin/realms/${realm}/users/${id}`;
  const bearer = options.request.header('Authorization');

  log.info('endpoint', url);
  return axios.delete(url, {
    headers: {
      'Authorization': bearer,
    },
  })
      .then((res) => {
        log.info('deleted', res.status);
        if (res.status === 204) {
          return {rowCount: 1};
        } else {
          return {rowCount: 0};
        }
      });
}
