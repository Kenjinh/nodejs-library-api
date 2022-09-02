var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

const db = require("./database/server");
const books = require("./routes/BookRouter");
const users = require("./routes/UserRouter");

class App {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();

    this.express
      .listen(port, () => {
        console.log("Server is running on port: http://localhost:" + port);
      })
      .on("error", function (err) {
        console.log(err);
      });
  }
  database() {
    db;
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use("/api/books", books);
    this.express.use("/api/users", users);
  }
}

module.exports = new App();
