var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 1300,
  user: "root",
  password: "#Spacebar13",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});