/* eslint max-len: ["error", { "ignoreStrings": true }]*/
import config from 'config';
import axios from 'axios';
import log from 'npmlog';

/**
 * Using a pool connection it will update the specified object
 * in the datasource.
 * This will also update the 'updatedOn' column.
 * @function update
 * @param {string} id - The model id.
 * @param {object} model - The object to update in the datasource.
 * @param {object} options - Configuration options.
 * @param {string} options.request - Original request.
 * @param {object} options.db - The datasource connection.
 * @return {Promise}
 */
export default function(id, model, options) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');
  const url = `${keycloakUrl}/admin/realms/${realm}/users/${id}`;
  const bearer = options.request.header('Authorization');

  log.info('endpoint', url);
  return axios.put(url, model, {
    headers: {
      'Authorization': bearer,
    },
  })
      .then((res) => {
        return model;
      });
}
