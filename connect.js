var mysql = require('mysql2');
var express = require('express');




var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodejs_database"
});

var app = express();
app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = connection;