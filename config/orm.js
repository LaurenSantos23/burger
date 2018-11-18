// Import the MySQL connection 
var connection = require('./connection.js');

// Create Methods (mySQL queries) that will execute the necessary mySQL commands in the controllers
// These are methods you will need in order to retrieve and store data in your database

// ORM functions
var orm = {
// selectAll function
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
          }
         cb(res);
     });
    },

// insertOne function
  insertOne : function(table, columns, values, cb) {
      console.log(values);
        var queryString = 'INSERT INTO burgers (burger_name) VALUES ("' + values[0] + '");';
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res)
            cb(res);
        });

    },

    // fix up this function, look at sql syntax and other functions
    //updateOne function
    updateOne: function(table, devoured, burger_name) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [table, devoured, burger_name], function(err, res){
            if (err) {
                throw err;
            }
            console.log(res.affectedRows + "record(s) updated")
        });
    },

    
};

//Export ORM object
module.exports = orm;