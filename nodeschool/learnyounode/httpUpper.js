var portNumber = Number(process.argv[2]);
var http = require('http');
var map = require('through2-map');

var server = http.createServer((req, res) => {

  var result = req.pipe(map((chunk)=>{
    return chunk.toString().toUpperCase();
  }));

  result.pipe(res);

  if(req.method != 'POST')
    return req.end('only POST method');

});

server.listen(portNumber);
