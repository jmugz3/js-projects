var http = require('http');
var url = process.argv[2];
//var bl = require('bl');
//bl (Buffer List)

http.get(url , (res) => {
  res.on('err', (e) => { console.error(e.message) });

  // res.pipe(bl( (err,data) => {
  //   if(err) return console.error(err);
  //
  //   data = data.toString();
  //   console.log(data.length);
  //   console.log(data);
  // } ));

  res.setEncoding('utf-8');
  //console.log(res.statusCode);
  var str = '';

  res.on('data', (chunk) => {
    str += chunk;
  });

  res.on('end', () => {
    console.log(str.length);
    console.log(str);
  });

});
