var port = Number(process.argv[2]);
var net = require('net');

function zeroCheck(data){
  return (data < 10 ? '0': '') + data;
}

var server = net.createServer((socket)=>{
  var data = new Date();
  var year = data.getFullYear()
  var month = zeroCheck(data.getMonth() + 1);
  var day = zeroCheck(data.getDate());
  var hour = zeroCheck(data.getHours());
  var minutes = zeroCheck(data.getMinutes());

  var result = year + "-"
              + month + "-"
              + day + " "
              + hour + ":"
              + minutes;

  socket.end(result + "\n");
});

server.listen(port);
