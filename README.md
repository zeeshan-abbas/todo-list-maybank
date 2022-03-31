# Todo List App

This project is a POC which uses following tech stack.

- React 
- React Router
- React Bootstrap
- NodeJS
- Express
- Sequelize
- MySQL

## App Requirements
Following requirements has been implemented.
Develop a simple to-do list app. The user should be able to:
- Create a new todo list
- Access the todo list by a short link, e.g.: https://sample-to-do-app/5GHY3E
- Add new todo items
- Edit the todo list or todo items
- Mark the todo items as done
- Delete todo item


## Project Setup
Run the `yarn install` on the root of the project. It will install all the dependencies needed to run the server as well as client.

### dotenv
This project uses `dotenv` package which that loads environment variables from a `.env` file into `process.env`. This `.env` file should be added to the root of the project which will contains the following properties
- PORT (The port which server should run at)
- DB_USERNAME (Database Username)
- DB_PASSWORD (Database Password)
- DB_NAME (Database Name)
- DB_HOST (Database Host)
- DB_DIALECT (Database Dialect which is `mysql` in our case)

### Sequelize
This project uses `Sequelize` and `Sequelize-cli` which is a tool to setup Models and Migrations for the Database. Once Database related information is added to the `.env` file run the following command.

`sequelize db:migrate`.

This will run the migration and create the required database tables. 

`Note: Database should be created directly in mysql and should be added to .env config`

## Run Project.

In order to run the project run the following command.

`yarn start`
