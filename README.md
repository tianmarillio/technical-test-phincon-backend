# Technical Test Phincon - Backend

## Setup

> PostgreSQL is required in your system

- Copy .env file from .env.example manually, or run command:

```
cp .env.example .env
```

- Fill out the database config, port, and jwt secret on the .env file

```
PORT=

DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_PORT=
```

- Install dependencies with command:

```
npm i
```

- Create PostgreSQL database manually, or run command:

```
npm run db:create
```

- Migrate database tables with command:

```
npm run db:migrate
```

- Run the app in the development environment:

```
npm run dev
```

## API Documentation

https://documenter.getpostman.com/view/15537853/2sAXjJ5Cjy