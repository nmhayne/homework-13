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


const connection = mysql.createConnection({
  host: "localhost",
  
  // Your port; if not 3306
  port: 3306,
  
  // Your username
  user: "newuser",
  
  // Your password
  password: "Mac1196!",
  database: "burgers_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  
});



app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;
    res.render("index", { burgers: data });
  });
});


app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burgerInput], function(err, result) {
    if (err) throw err;
    // This redirect forces the browser to reload the home page via the GET route above.
    res.redirect("/");
  });
});

- function selectAll() {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;
  });
}
- function insertOne() {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burgerInput], function(err, result) {
    if (err) throw err;  
  });
}
- function updateOne() {
  connection.query("UPDATE burgers (burger) VALUES (?)", [req.body.burgerInput], function(err, result) {
    if (err) throw err;  
  });
}


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
