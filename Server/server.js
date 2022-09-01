require("dotenv").config();

const envVariables = process.env;

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

// app.use is for middleware

// middleware

// middleware
app.use(express.json());

app.use((request, response, next) => {
  // next must be run if we want to move to the next piece of middleware
  console.log("path:", request.path, "method", request.method);
  next();
});

// routes

app.use("/api", routes); // use the routes only if the path matches

// connect to database

mongoose
  .connect(envVariables.MONGO_URI)
  .then(() => {
    // listen for requests

    // to listen without live updates use node server.js
    // to listen with updates install nodemon an use nodemon server.js

    // i've added a command named dev for nodemon, use npm run dev to start
    // the live server

    app.listen(envVariables.PORT, () => {
      console.log(
        `connected to database & listening for requests on port ${envVariables.PORT} !`
      );
    });
  })
  .catch((error) => {
    console.log("could not connect to database error object:", error);
  });

// README --->!!!!

//   create a .env file with the following variables
// PORT=somePortNumber
// MONGO_URI=mongodb+srv://<userNameHere>:<passwordHere>@mernapp.vjdilyl.mongodb.net/?retryWrites=true&w=majority

// install with npm:
// express
// nodemon
// or just npm i

// To run : npm run dev or nodemon server.js(live updates) or node server.js(without live updates)
// <--- README !!!!
