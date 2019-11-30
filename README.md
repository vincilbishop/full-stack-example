# full-stack-example
An example full stack application using Node.js and Angular

![Demo Animation](https://github.com/vincilbishop/full-stack-example/raw/develop/demo.gif "Full Stack Example Screenshot")

See the live demo [HERE](https://frozen-fortress-85895.herokuapp.com/).

## Development

### Prerequisites
The following items are required to be installed globally in order to run the application locally:
* [Node.js v10](https://nodejs.org/en/about/releases/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Docker](https://www.docker.com/products/docker-desktop)

### Local Application
To run the application locally:
* Clone this repository.
* From the `api/` directory run `yarn install` to install dependencies.
* From the `api/` directory run `yarn compose up` to start the database.
* From the `api/` directory run `yarn db:reset` to populate the database.
* From the `api/` directory run `yarn start:dev` to start the application server.
* In a separate terminal window from the `web/` directory run `yarn start:dev` to start the web server.

The following URLs should now be available:

* Web UI: [http://localhost:4200/](http://localhost:4200/)
* Swagger UI: [http://localhost:3000/api/v1/docs](http://localhost:3000/api/v1/docs)
* pgAdmin4 (Database): [http://localhost:8081/](http://localhost:8081/)
  * Username: `postgres@admin.com`
  * Password: `password`

### Unit Tests
* From the `api/` directory run `yarn test`
* From the `web/` directory run `yarn test`

### e2e Tests
* From the `api/` directory run `yarn test:e2e`
* From the `web/` directory run `yarn test:e2e`
