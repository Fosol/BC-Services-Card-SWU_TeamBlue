# BC-Services-Card-SWU_TeamBlue

Code challenge for the BC Services Card Sprint With Us opportunity (Nov 2019)

## Project Management

We are using [Trello](https://trello.com/b/ihMbsBwR/bc-services-card-self-service) to manage our User Stories.

## Development

*Please note:* for compatibility, the development scripts assume a bash-like shell will be used to run the projects. Linux and OSX are supported out-of-the-box, for Windows please install [Git Bash](https://git-scm.com/downloads).

To start a development environment with hot-reload capabilities, run `./manage start-dev` from the `docker` folder.

This will mount the source inside the docker containers and every change made in the development environment should trigger the application to reload with the new changes.

# Testing

Refer to the [README](./tests/README.md) for further information.

# Components

There will be four principal components to this solution;

1. KeyCloak (PostgreSQL)
2. APP (React)
3. API (Node)
4. DB (Mongo)

## KeyCloak

KeyCloak will provide the Open ID Connect (Oauth) user identity management solution.

Port: 8180

See [README](/KEYLCOAK.md) for additional information.

## APP (React)

The React APP will provide the user experience and client application.

Port: 3000

See [README](/frontend/README.md) for additional information.

## API (Node)

The Node API will provide a RESTful access point to control what the APP can perform.

Port: 5000

See [README](/api/README.md) for additional information.

## Database (Mongo)

The Mongo DB will be used by the API to store and manage any related information for user management.

Port: 27017

See [README](/DATABASE.md) for additional information.

# Workflow

The architectural design to support the requirements is as follows.

## Configuration

- Configuration will use environment variables.
- Passwords or secret information will not be stored in GIT (outside of development environment setup values).
- DevOps will import its own environment related secrets.

## Network

- All requests will be proxied from the APP to the API
- Cookie based authentication that the APP will pass to the API
- SSL/HTTPS implementation (if we can get self-generated certificates working throughout the whole pipeline)

## Unauthenticated

- _Guest User_ loads APP [Landing Page]
- _Guest User_ click Login
  - _Guest User_ is redirected to [KeyCloak Login Page]
  - _Guest User_ can register or login [KeyCloak Register Page]
- _Guest User_ is authenticated and redirect back to APP [Profile Page]

## Authenticated

- User can go to [Users List Page]
  - User can page through users
  - _Admin User_ can view user Details [User Details Page]
  - _Admin User_ can delete user
- User can logout and is redirected back to [Landing Page]
