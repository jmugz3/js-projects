var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Jose\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
var url = require('url');
var path = require('path');
var fs = require('fs');

var mimeTypes = {
  "html": "text/html",
  "jpeg": "text/jpeg",
  "jpg" : "text/jpg",
  "png" : "text/png",
  "js"  : "text/javascript",
  "css" : "text/css"
};


//Create Server
http.createServer(function(req,res){
  var uri = url.parse(req.url).pathname;
  var fileName = path.join(process.cwd(), unescape(uri));
  console.log('Loading ' + uri);
  var stats;

  //check that file exists
  try {
    stats = fs.lstatSync(fileName);
  } catch(e) {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.write('404 Not Found\n');
    res.end();
    return;
  }

  //file or directory
  if (stats.isFile()) {
    var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]]
    res.writeHead(200, {'Content-Type':mimeType})

    var fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);
  }
  else if(stats.isDirectory()){
    res.writeHead(302, {'Location':'index.html'});
    res.end();
  }
  else{
    res.writeHead(500, {'Content-Type':'text/plain'});
    res.write('500 Internal Error\n');
    res.end();
  }

}).listen(3000);
