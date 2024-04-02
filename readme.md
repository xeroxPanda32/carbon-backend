# Node.js Express API Boilerplate

This repository contains a Node.js Express API boilerplate with authentication, MongoDB integration, Swagger documentation, and linting setup.

## Features

- Authentication using JWT (JSON Web Tokens)
- MongoDB integration with Mongoose
- Swagger API documentation using swagger-jsdoc and swagger-ui-express
- ESLint configuration based on Airbnb JavaScript style guide

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js 
- MongoDB

 ## Getting Started

 1. Clone the repository:
     - https://github.com/xeroxPanda32/carbon-backend.git

2. Install dependencies:

        npm install

3. Set up environment variables:

- Create a .env file in the root directory with the following environment variables:

        PORT=3000
        MONGO_URI=mongodb://localhost:27017/mydatabase
        SECRET_KEY=your_secret_key
        PUBLIC_API_BASE_URL="https://api.publicapis.org"

4. Start the server:
         
         npm start

## Folder Structure 

 - controllers/: Contains controller functions for route handling.
- models/: Defines Mongoose models for MongoDB.
- passport/: Contains Passport.js configuration for authentication - strategies.
- routes/: Defines API routes using Express.js.
- swagger/: Contains Swagger specification and Swagger UI setup.
- index.js: Main entry point for the Express application.
- .env: Environment variable configuration file.
- .eslintrc.json: ESLint configuration file for linting rules.
- package.json: Node.js package configuration.

## API Endpoints

- /auth/register: POST endpoint to register a new user.
- /auth/login: POST endpoint to authenticate and login a user.
- /auth/profile: GET endpoint to fetch user profile (protected route).
- /public/categories: GET endpoint to fetch all categories from a public API.
- /public/entries: GET endpoint to fetch entries based on category and limit from a public API.


For detailed API documentation, you can access the Swagger UI at http://localhost:3000/api-docs.