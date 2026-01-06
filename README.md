## Overview

This is a quick start template to get a best-practice web app up and running.

Based on:

- Next.js, the React Framework for the Web
- NextAuth.js, a complete open source authentication solution.
- [https://github.com/nextauthjs/next-auth-example.git](next-auth-example), an implementation of NextAuth
  - ISC License copyright Balázs Orbán
  - other contributors: Iain Collins, Nico Domino, Lluis Agusti, Thang Huu Vu

## Security Disclaimer

Security is a deep subject and critically important. This project is forked from NextAuth's example code, and every attempt has been made to maintain or increase security.

However, it is _strongly recommended_ to have a penetration test performed by an experienced security firm before going live with any app forked from this code.

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/gillbreath/next-auth-launchpad
cd next-auth-launchpad
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local or .env

- Fill in the details for the env vars
- note, ".local" is a Next.js convention
- don't check these files in - both of those file names are in .gitignore to help

### 3. Run tests and start the application

There must be an instance of the server running before the automated tests. Package `start-server-and-test` does both.

For the auth tests, several env vars need to be set:

- in `.env`
  - `INSECURE_TESTING_PROVIDER_ON="true"`
  - `INSECURE_TESTING_PASSWORD="some value"`
- in `cypress.env.json`
  - `INSECURE_TESTING_PASSWORD` set to the same value

You can run tests in one-shot or interactive mode:

- `npm run test`
- `npm run test-interactive`
  In interactive mode, Cypress launches a browser where you can see & interact with each step of the test for debugging purposes.

### 5. Preparing for Production

1. Set up package-lock.json
1. `npm run prep`
1. Follow AuthJS deployment docs
1. Review security

#### Set up package-lock.json

In this library, `package-lock.json` is intentionally not included. You'll want your own version containing the latest packages.

In `.gitignore`, delete the line `package-lock.json` (and related comments). Run `npm install`. This will create a `package-lock.json` file. Git add and commit it.

#### `npm run prep`

This command formats, tests, and builds all in one. You should make it part of your automated deployment workflow, often as a git hook that runs before merging to a `staging` branch or similar.

#### Follow AuthJS deployment docs

Follow the [Deployment documentation](https://authjs.dev/getting-started/deployment)

#### Review security

See security disclaimer above.

## License

ISC
