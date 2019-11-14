/* eslint-disable max-len */
import config from 'config';
import log from 'npmlog';
import fetch from 'node-fetch';

/**
 * Using the datasource connection pool
 * make a request for all the objects.
 * @export all
 * @param {object} db - The database connection.
 * @param {object} filter - The filter parameters.
 * @param {string} [filter.email] - Users email address
 * @param {string} [filter.firstName] - Users first name
 * @param {string} [filter.lastName] - Users last name
 * @param {string} [filter.search] - A String contained in username, first or last name, or email
 * @param {int} [filter.max=100] - The maximum number of users to return (defaults: 100)
 * @return {Promise}
 */
export default function(db, filter) {
  const keycloakUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');

  log.info('endpoint', `${keycloakUrl}/${realm}`);
  return fetch(`${keycloakUrl}/${realm}/users`, {
    credentials: 'same-origin',
  }).then((res) => {});
}
