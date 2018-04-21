var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')


//express app
var app = app.express()
var PORT = process.env.PORT

//Static path to public
app.use(express.static(path.join(__dirname, './app/public')))

//parsing income requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//path.join routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//listen to PORT
app.listen(PORT, function() {
  console.log('PORT: ' + PORT);
});