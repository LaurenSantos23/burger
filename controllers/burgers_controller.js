//Dependencies
var express = require('express');
var router = express.Router();

//Import the model burger.js for database 
var burger = require("../models/burgers.js");

// create routes and logic (get, post, put, update, delete)

//GET method

router.get("/", function(req,res) {
    res.redirect("/burgers");
  });

router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerdata){
        res.render("index", { burger_data: burgerdata});
    });
});

//POST method
router.post("/burgers/create", function( req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);

    });
    result.redirect("/")
});

//PUT methodd
router.put("/burgers/update", function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
    });
    res.redirect("/");
});


//export routes for server.js 
module.exports = router;