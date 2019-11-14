# BC Services Card API

This is a Node Express API application to support the BC Services Card Code Challenge.

# Endpoints

The following endpoints will be supported.

| Name        | Route          | Method | Returns  | Params    | Description                                   |
| ----------- | -------------- | ------ | -------- | --------- | --------------------------------------------- |
| Login       | /api/login     | GET    | Redirect | NA        | Redirect to KeyCloak                          |
| Profile     | /api/profile   | GET    | JSON     | Cookie    | Based on current user get profile information |
| Users       | /api/user/find | GET    | JSON     | page, qty | Paging array of users                         |
| User        | /api/user/:id  | GET    | JSON     | id        | Returns User details for specified ID         |
| Delete User | /api/user      | DELETE | JSON     | User      | Success or error                              |
