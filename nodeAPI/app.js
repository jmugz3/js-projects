var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/reddit');
var Test = require('./models/testModel');

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var testRouter = require('./routes/testRoutes')(Test);
app.use('/api/tests', testRouter);


app.get('/', function (req, res){
  res.send("Welcome to my REST API");
});


app.listen(port, function (req, res) {
   console.log("Gulp is running my app on port " + port);
});
