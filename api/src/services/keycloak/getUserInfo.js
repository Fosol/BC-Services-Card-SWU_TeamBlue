/* eslint max-len: ["error", { "ignoreStrings": true }]*/
import config from 'config';
import axios from 'axios';
import log from 'npmlog';

/**
 * Using the connection pool get one object
 * from the datasource that matches the specified 'id'.
 * @function get
 * @param {int} id - The id of the object.
 * @param {object} options - Configuration options.
 * @param {string} options.request - Original request.
 * @param {object} options.db - The client connection.
 * @return {Promise}
 */
export default function(id, options) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');
  const url = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/userinfo`;
  const bearer = options.request.header('Authorization');

  log.info('endpoint', url);
  return axios({
    url,
    headers: {
      'Authorization': bearer,
    },
  })
      .then((res) => {
        return res.data;
      });
}
