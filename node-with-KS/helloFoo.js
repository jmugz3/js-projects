function say(filename, cb) {
    //return fs.readFileSync(filename); //not a sin for command line
    return fs.readFile(filename, function(err, contents){
        if (err){
            cb(err);
        } else {
            //delay response with contents as simulation using timer. (e.g. a db call)
            setTimeout(function(){
                cb(null, contents);
            }, 1000);
        }
    });
}

var fs = require('fs');

module.exports.say = say;