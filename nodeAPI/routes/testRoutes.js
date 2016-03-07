var express = require('express'),
	mongoose = require('mongoose');


var testRoutes = function(Test){
  
  var myRouter = express.Router();
  var testController = require('../controllers/testController')(Test); 
  
  
  myRouter.route('/')
      .post(testController.post)
      .get(testController.get);
      
  myRouter.route('/:domain')
      .get(function (req, res){
        
        Test.findById(req.params.domain, function(err, test){
          if(err){
            res.status(500).send(err);
          }
          else{
            res.json(test);
          }
          
        });
      });
  
  return myRouter;
  
};

module.exports = testRoutes;