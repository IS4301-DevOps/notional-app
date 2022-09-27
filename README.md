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
After modifying the database, run:

`npx prisma generate`

To sync Prisma schema with Heroku db, run:

`npx prisma db push`

To view and modify db data, run:

`npx prisma studio`

# Fix Typescript error relating to `prisma.ts`

run `yarn add -D @prisma/client`

# Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

# Resources
- [NextJS](https://nextjs.org/docs/getting-started)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Prisma](https://www.prisma.io/docs/)
- [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
