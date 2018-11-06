// Set up MySQL connection
var mysql = require("mysql");
var connection;
// is this supposed to use the JAWSDB_URL????
if (process.env."mysql://p8w0fjfywzq7ar4a:lx8oxm4x71rc7se4@pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/g7bwn935rfakxbxo") {
 connection = mysql.createConnection(process.env."mysql://p8w0fjfywzq7ar4a:lx8oxm4x71rc7se4@pfw0ltdr46khxib3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/g7bwn935rfakxbxo");
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password:"password",
    database: "burgers_db",
  });
};

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
