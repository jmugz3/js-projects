
var testController = function(Test){
	
  var get = function (req, res){
        
        var query = req.query;
        
        Test.find(query, function(err, tests){
          if (err){
            res.status(500).send(err);
          }
          else{
            res.json(tests);    
          }
          
        });
      };
	
	
	var post = function(req, res){
        var test = new Test(req.body);
        
        test.save();
        res.status(201).send(test);
        
      }
    
	return {
    get : get,
    post: post
  };
};

module.exports = testController;