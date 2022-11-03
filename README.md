# HelloTrello
Production site: https://hellotrello-app.netlify.app/  
[HelloTrello Design System](https://www.figma.com/file/tHNiggDz65lOb39R5WYQwQ/HelloTrello-Design-System?node-id=0%3A1)

## Getting Started
1. Setup Prettier on VScode
2. Create `.env` file with `DATABASE_URL` in the root directory to connect to Heroku PostgreSQL server.
3. Run `yarn install` or `npm install` to install required dependencies.
4. To start the application in development mode, `yarn dev` or `npm run dev`.
5. To start the application in production mode, run `yarn build` or `npm run build` to run the build script once. Then run `yarn start` or `npm run start`.


## Database
After modifying the database, run:

`npx prisma generate`

To sync Prisma schema with Heroku database, run:

`npx prisma db push`

To view and modify db data, run:

`npx prisma studio`

## Fix Typescript error relating to `prisma.ts`
Run `yarn add -D @prisma/client`

## Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## Resources
- [NextJS](https://nextjs.org/docs/getting-started)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Prisma](https://www.prisma.io/docs/)
- [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
