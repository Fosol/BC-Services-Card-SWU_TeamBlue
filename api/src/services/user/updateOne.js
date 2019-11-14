/* eslint max-len: ["error", { "ignoreStrings": true }]*/

/**
 * Using a pool connection it will update the specified object
 * in the datasource.
 * This will also update the 'updatedOn' column.
 * @function update
 * @param {object} db - The datasource connection.
 * @param {string} id - The model id.
 * @param {object} model - The object to update in the datasource.
 * @return {Promise}
 */
export default function(db, id, model) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');

  log.info('endpoint', `${keycloakUrl}/${realm}`);
  return fetch(`${keycloakUrl}/${realm}/users/${id}`, {
    credentials: 'same-origin',
    method: 'PUT',
    body: model,
  }).then((res) => {});
}
