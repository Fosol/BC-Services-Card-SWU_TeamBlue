/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using the connection pool get one object
 * from the datasource that matches the specified 'id'.
 * @function get
 * @param {object} db - The client connection.
 * @param {int} id - The id of the object.
 * @return {Promise}
 */
export default function(db, id) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');

  log.info('endpoint', `${keycloakUrl}/${realm}`);
  return fetch(`${keycloakUrl}/${realm}/users/${id}`, {
    credentials: 'same-origin',
  }).then((res) => {});
}
