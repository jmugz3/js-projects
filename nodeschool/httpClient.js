var url = process.argv[2];
var http = require('http');

http.get(url, (res) => {
  //console.log(res.statusCode);
  //calls req.end() automagically
  res.setEncoding("utf-8");
  res.on("data",(chunk) => { console.log(chunk); });
  res.on("error", (e) => { console.error(e.message); });

})
