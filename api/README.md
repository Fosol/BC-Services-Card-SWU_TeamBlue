# BC Services Card API

This is a Node Express API application to support the BC Services Card Code Challenge.

# Development
*To use the API you may need to run it outside of docker until we resolve the container networking issue.*

*I'm still working out how to get the debugging working*

1) Go to /api and execute `>npm install`
2) Create `.env` file
   - Update `.env` with
      - PORT=5000
      - KEYCLOAK_SECRET="[THE PRIVATE KEY FOR THE KEYCLOAK API]"
3) To run locally
  - stop the API docker container if it is running
  - execute `>nodemon start`

# Endpoints

The following endpoints will be supported.

| Name        | Route           | Method | Returns        | Params                                          | Description                                   |
| ----------- | --------------  | ------ | --------       | ---------                                       | --------------------------------------------- |
| Login       | /api/auth/login | GET    | Redirect       | NA                                              | Redirect to KeyCloak login page               |
| Login       | /api/auth/auto  | POST   | JSON           | body:{ username:?, password:?, scope:? }        | Provides a manual way to login directly to the API - temporary and only for testing.                  |
| Profile     | /api/profile    | GET    | JSON           | Cookie                                          | Based on current user get profile information |
| Users       | /api/user/find  | GET    | JSON [{User}]  | page, qty                                       | Paging array of User                          |
| User        | /api/user/:id   | GET    | JSON {User}    | id                                              | Returns User details for specified ID         |
| Update User | /api/user       | PUT    | JSON {User}    | body:User                                       | Returns updated User details                  |
| Delete User | /api/user/:id   | DELETE | JSON           | id                                              | Success or error                              |

