var http = require('http');
var url = require('url');

var portNumber = process.argv[2];

function jsonResponse(time){
  return {
    hour : time.getHours(),
    minute : time.getMinutes(),
    second : time.getSeconds()
  }
}
function unixResponse(time){
  return { unixtime : time.getTime() }
}

function requestHandler(req, res){
    var data;
    var reqParsed = url.parse(req.url, true);
    var inputTime = new Date(reqParsed.query.iso);

    if('/api/parsetime' == reqParsed.pathname)
      data = jsonResponse(inputTime);
    else if('/api/unixtime' == reqParsed.pathname)
      data = unixResponse(inputTime);


    if(data){
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(data));
    } else{
      res.writeHead(404);
      res.end('There was an error');
    }
}

http.createServer(requestHandler).listen(portNumber);
