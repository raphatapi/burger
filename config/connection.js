var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b13d4f5caa667b",
  password: "4e0c31c2",
  database: "heroku_2b4c26e35965172"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

// mysql://b13d4f5caa667b:4e0c31c2@us-cdbr-iron-east-05.cleardb.net/heroku_2b4c26e35965172?reconnect=true