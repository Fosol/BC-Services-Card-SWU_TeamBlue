/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using the client connection pool, connect to the datasource
 * and delete the specified object.
 * @function remove
 * @param  {object} db - The datasource client.
 * @param  {string} id - The model id.
 * @param  {object} model - The object to delete.
 * @return {Promise}
 */
export default function(db, id, model) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');

  log.info('endpoint', `${keycloakUrl}/${realm}`);
  return fetch(`${keycloakUrl}/${realm}/users/${id}`, {
    credentials: 'same-origin',
    method: 'DELETE',
  }).then((res) => {});
}
