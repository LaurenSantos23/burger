// Requirements
var orm = require('../config/orm.js');

// ORM Functions

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

// insertOne function
    insertOne: function(name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"],[name, false],cb) 
    },

// updateOne function
    updateOne: function(objColVals, updateID, cb) {
        orm.updateOne("burgers", objColVals, updateID, function(res){
            cb(res);
        });
    },  

};
//export module
module.exports = burgers;