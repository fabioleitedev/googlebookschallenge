# Google Books Challenge 📚
This is a React / Node.js challenge to consume the Google Books API.

## Technical Considerations
- I'm using **Lerna** as my monorepo technology. It makes sense for products pespective. For example, we can share the model classes between both frontend and backend projects and more.
- I'm using NestJS as the Node.js framework for many reasons. One of these reasons is to have all the code well organized with good patterns. Other great reason is because this framework provide a set of great resources to many scenarios such as microservices, event-driven and more.
- ⚠️ Specally for the purposes of this challenge, I put the ``.env`` file in the root of each project. But it's not a usuall practice.

### Web Frontend
- Coded in React and Typescript
- Using Jest for some tests.
- I addded some good UX behaviors that I consider important like skeletons and disabling components while querying the API.
- As a "challenge" perspective, I decided not changing the original structure of the React app.
- A sugestion would be to use a button to trigger the search, to avoid a request every time I hit a key in the search field, or of course, use a full-text-serach approach with Elastic or Mongo.

### API Backend
- Coded in Node.js and Typescript.
- Using NestJS framework.
- Using Jest for testing.

## Out of this scope (But I strongly recommend)
- Authentication
- Authorization
- Swagger/OpenAPI documentation
- Redis (This is a good scenario to thinking about cache results for some common searches in memory)
- Of couse, a lot of other improvements 👍🏻

## Requirements to Start
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or NPM (installed with Node.js)
- [Lerna](https://lerna.js.org/) (or use node.js npx to execute it)

## How to Start?
- Clone this repository.
- Inside the root folder, run ``npx lerna bootstrap``.
- Run ``npx lerna run start``. It will start both frontend and backend projects. 🤩
- In your browser, access the frontend app at [http://localhost:3000](http://localhost:3000)
- You can access the backend API at [http://localhost:5000](http://localhost:5000)
- To run the frontend and backend tests, after starting all with the third step, just run ``npx lerna run test``.
- Have fun! 🤓 (and sorry if I forget something).
