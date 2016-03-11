var urls = [process.argv[2], process.argv[3], process.argv[4]]
var http = require('http');
var bl = require('bl');
var totalData = [];


var collect = function(urls){
  var data = '';

  for (var i = 0 ; i < urls.length; i++)
  {
    http.get(urls[i], (res) => {
      res.pipe(bl(function(err,data){
        if (err) return console.error(err.message);
        totalData[i] = data.toString();
        printResults(totalData[i]);
      }));
    });
  }
}

function printResults(item){
    console.log(item);
}

collect(urls);
