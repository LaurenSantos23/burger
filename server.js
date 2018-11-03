const express = require('express');
const db = require('./models');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');
app.use(route);

const port = process.env.PORT || 3000
db.sequelize.sync().then(() => (
 app.listen(port, () => (
  console.log('app now listening on port',port)   
 ))   
))