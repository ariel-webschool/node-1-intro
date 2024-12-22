// database-example.js

var mysql = require('mysql');

const CONFIG = {
	host: "localhost",
	user: "root",
	password: "",
	database: "webschool_test"
  };

function get_result(err, result, fields) {
	if (err) throw err;
	console.log(result);
}

var con = mysql.createConnection(CONFIG);

con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM users", get_result);

});

console.log('Cette ligne de code est executer a la fin')