# KeyCloak Information

The development Keycloak container has been set up as follows:

- REALM: `bcsc-swu`
- CLIENT: `team-blue`, it is a public client.

The instance is pre-populated with the following users:

- `administrator`: an administrator user (has the `administrator` role for the `team-blue` client)
- `contributor`: an administrator user (has the `contributor` role for the `team-blue` client)

## Keycloak Console

The keycloak management console can be accessed at http://localhost:8180 using `admin/admin` as login credentials.
