function handleHTTP(req, res){
    if(req.method === "GET"){
        if(/^\/\d+(?=$|[\/?#])/.test(req.url)){
            req.addListener("end", function () {
                req.url = req.url.replace(/^\/(\d+).*$/,"/$1.html")
                static_files.serve(req, res);
            });
            req.resume();
        } else {
            res.writeHead(403);
            res.end("Not here. Move on!");            
        }
        
    } else {
        res.writeHead(403);
        res.end("Not here. Move on!");
    }
}

function handleIO(socket){
    function disconnect(){
        clearInterval(intv);
        console.log("client disconnected");
    }
    
    console.log("Client Connected");
    socket.on("disconnect", disconnect);
    
    var intv = setInterval(function(){
        socket.emit("hello", Math.random());
    }, 1000);
}


var host = "localhost";
var port = 8006;

var http = require('http');
var http_serv = http.createServer(handleHTTP).listen(port, host);

var ASQ = require("asynquence");
var node_static = require("node-static");

var static_files = new node_static.Server(__dirname);
var io = require('socket.io').listen(http_serv);

io.on("connection", handleIO);

io.configure(function(){
   io.enable("browser client minification"); 
   io.enable("browser client etag"); //caching
   io.set("log level", 1); //reduce logging
   io.set("transports", [
      "websocket",
      "xhr-polling",
      "jsonp-polling" 
   ]);
});