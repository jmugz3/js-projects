function handleHTTP(req, res){
    
    if(req.method === "GET"){
        res.writeHead(200, {
        "Content-type": "text/plain" 
        });
        res.write("Hello World ");
        res.end(Math.random().toString());
    } else {
        res.writeHead(403);
        res.end("Not here. Move on!");
    }
}



var host = "localhost";
var port = 8006;

var http = require('http');
var http_serv = http.createServer(handleHTTP).listen(port, host);

