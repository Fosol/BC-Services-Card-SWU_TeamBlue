import rp from 'request-promise';
import config from 'config';

/**
 * Authenticate the user through the API instead of the login form.
 * @export authenticate
 * @param {object} options
 * @return {Promise}
 */
export default function(options) {
  const request = options.request;
  const response = options.response;
  const next = options.next;

  const authServerUrl = config.get('keycloak.auth-server-url');
  const realm = config.get('keycloak.realm');

  const data = {
    uri: `${authServerUrl}/realms/${realm}/protocol/openid-connect/token`,
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: {
      grant_type: 'password',
      client_id: config.get('keycloak.resource'),
      client_secret: config.get('keycloak.credentials.secret'),
      username: request.body.username,
      password: request.body.password,
      scope: request.body.scope,
    },
  };

  return rp(data)
      .then((body) => {
        response.send(body);
      })
      .catch((err) => {
        next(err);
      });
}
