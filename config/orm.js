//Import the MySQL connection 
var connection = require('./connection.js');

//Create Methods (mySQL queries) that will execute the necessary mySQL commands in the controllers
// These are methods you will need in order to retrieve and store data in your database

var orm = {
    selectAll: function(table, cb) {
     var queryString = "SELECT * FROM " + table + ";";
     connection.query(queryString, function(err, res){
            if (err) {
                throw err;
          }
         cb(res);
     })
    }
    
}
module.exports = orm;