const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

const PORT = process.env.port || 8080;
// const dbConfig = (process.env.NODE_ENV === "production") ? config.heroku : config.db


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/",  function (req, res) {
  res.send("Server Working!");
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
