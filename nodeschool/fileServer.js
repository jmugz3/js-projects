var portNumber = Number(process.argv[2]);
var loc = process.argv[3];

var http = require('http');
var fs = require('fs');
var server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type':'text/plain'});
  var file = fs.createReadStream(loc);
  file.pipe(res);

});

server.listen(portNumber);
