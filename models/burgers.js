//Requirements
var orm = require('../config/orm.js');

//ORM Functions

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burger_data", function(res){
            cb(res);
        });
    },

    //insertOne function
    insertOne: function(columns, values, cb) {
        orm.insertOne("burger_data", columns, values, function(res){
            cb(res);
        });
    },

    //updateOne function
    updateOne: function(objColVals, updateID, cb) {
        orm.updateOne("burger_data", objColVals, updateID, function(res){
            cb(res);
        });
    },  

};
//export module
module.exports = burgers;