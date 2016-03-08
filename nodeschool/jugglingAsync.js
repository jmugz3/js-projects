var urls = [process.argv[2], process.argv[3], process.argv[4]]
var http = require('http');
//var bl = require('bl');
var count = 0;


console.log(urls);

var collect = function(url){
  var data = '';
  var totalData = [];

  for (var i = 0 ; i < urls.length; i++)
  {
    http.get(url, function(res){
      res.setEncoding('utf-8');
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', function(){
        console.log(data);
        //totalData.push(data);
        count++;
      });
    });
  }
  return totalData;
}


function DisplayResults(results){
  if (count === urls.length){
    results.forEach(function(result){
      console.log(result);
    });
  }
}

var results = collect(urls);
DisplayResults(results);
