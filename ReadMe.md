## This test project consists both backend and frontend app, which are currently disjoint from each other. Your task is to create tests for both of these projects.

The tests should consists of<br>
* Unit tests written for both Backend and frontend, using Jest
* Postman tests written for Backend
* cypress E2E tests written for frontend
* Each of your test type should have both negative and positive scenarios(atleast 2)
* All your test must have assertions


### What has to be tested in backend?
* Backend consists of both rest and graphql apis, your tests must cover these end points, you can find the end points under controller(REST) and resolvers(Graphql).

### What has to be tested in frontend?
* Ui components in your Unit tests
* Elements on the UI using cypress E2E


### What is porject stack?
* Backend is built on NestJs(you can find more information here: <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
* Frontend is built using NextJS, more info: <p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" width="120" alt="NextJs Logo" /></a>
</p>

### How to start the project
* You need to install npm packages in both frontend and backend projects individually
* After that you can use `npm run dev` in frontend project to start it on port 3000
* To run backedn project use `npm run start:dev` this will start both rest and graphql projects on port 3333, to open graphql playground you will need to go on to `http://localhost:3333/graphql` the rest server is available at `http://localhost:3333/` you can use the same in postman for accessing both the api's
