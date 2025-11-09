## Overview

This is a quick start template to get a best-practice web app up and running.

Based on:
- Next.js, the React Framework for the Web
- NextAuth.js, a complete open source authentication solution.
- [https://github.com/nextauthjs/next-auth-example.git](next-auth-example), an implementation of NextAuth
   - ISC License copyright Balázs Orbán
   - other contributors: Iain Collins, Nico Domino, Lluis Agusti, Thang Huu Vu

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/gillbreath/next-auth-launchpad
cd next-auth-launchpad
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local or .env
- note ".local" is a Next.js convention
- don't check these files in - both of those file names are in .gitignore to help
- Add details

### 3. Start the application

To run your site locally, use:

```
npm run dev
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/getting-started/deployment)

## License

ISC
