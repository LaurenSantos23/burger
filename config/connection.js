// Set up MySQL connection
var sql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: root,
    password:"password",
    database: "burgers_db"

});

// Make connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for ORM to use
  module.exports = connection;
