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


app.all('/api', function(req, res, next){
   console.log(req.method, ' request for /api');
   next();
});

app.get('/', function (req, res){
  res.send("Welcome to my REST API");
});

app.get('/error/:route', function(req, res){
   res.status(404).send('The %s does not exists. You will be redirected',req.param.route);
   res.redirect('/');
   res.end();
});


app.listen(port, function (req, res) {
   console.log("Gulp is running my app on port " + port);
});
