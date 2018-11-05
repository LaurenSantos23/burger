//Dependencies and requirements
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use(routes);

var port = process.env.PORT || 8000
app.listen(port, () => (
  console.log('app now listening on port',port)   
 ))   
