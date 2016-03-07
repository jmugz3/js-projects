var dir = process.argv[2];
var filter = process.argv[3];
var modular = require('./modular');

modular(dir, filter, function(err, list){

    if (err) return console.error("Reached an error:", err);

    list.forEach(function(item){
      console.log(item);
    })
});
