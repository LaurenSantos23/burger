//Dependencies
var express = require('express');

var router = express.Router();

//Import the model burger.js for database 
var burger = require("../models/burgers.js");

// create routes and logic (get, post, put, update, delete)
router.get("/burgers", function(request, response) {
    burger.selectAll(function(burgerdata){
        response.render("index", { burger_data: burgerdata})
    })
})



//export routes for server.js to use
module.exports = router;