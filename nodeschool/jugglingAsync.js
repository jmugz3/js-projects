var urls = [process.argv[2], process.argv[3], process.argv[4]]
var http = require('http');
var bl = require('bl');
var totalData = [];


var collect = function(urls){
  var data = '';



  for (var i = 0 ; i < urls.length; i++)
  {
    //console.log(urls[i]);
    http.get(urls[i], (res) => {
      //res.setEncoding('utf-8');
      // res.on('data', (chunk) => {
      //   data += chunk;
      //   //console.log(data);
      // });
      // res.on('end', () => {
      //   totalData.push(data);
      //   // callback(null, totalData);
      // });
      // res.on('error', (err)=>{
      //   console.error('Error: ' + err.message);
      //   // callback(err, null);
      // });
      res.pipe(bl(function(err,data){
        if (err) return console.error(err.message);

        totalData[i] = data.toString();
        printResults(totalData[i]);

      }));

    });
  }
}

collect(urls);


function printResults(item, index){

    console.log(item);

}
