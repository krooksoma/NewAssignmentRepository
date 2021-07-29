const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/connection")

// Creates the connection to the server
const app = express();
const PORT = process.env.PORT || 3001;

// Setup express to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turns on routes from routes folder
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force : false }).then(() => { 
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
