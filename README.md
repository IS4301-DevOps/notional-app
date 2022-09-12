# Getting Started

1. Setup Prettier on VScode
2. Install Yarn
```
npm i yarn --global
```
3. Create `.env` file with `DATABASE_URL` in the root directory
4. `yarn`
5. `yarn dev`

# Database

Online Heroku PostgreSQL server

After modifying the database, run:

`npx prisma generate`

# Fix Typescript error relating to `prisma.ts`

run `yarn add -D @prisma/client`

# Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
