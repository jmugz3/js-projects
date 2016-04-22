
function readFile(filename) {
    var sq = ASQ();
    
    // sq.then(function(done){
    //    fs.readFile(filename); 
    // });
    
    //errfcb - Error first Callback
    
    
    //fs.readFile(filename, sq.errfcb() ); 
    
    return ASQ(function (done) {
       var stream = fs.createReadStream(filename); 
       var contents = "";
       
       stream.pipe(fs.createWriteStream(filename + ".backup"));
       
       stream.on("data", function(chunk){
           //console.log("data");
            contents += chunk;    
       });
       
       stream.on("end", function(){
           done(contents);
       });
    });
}

function delayMsg(done, contents){
    setTimeout(function(){
      done(contents);  
    }, 1000);
}


function say(filename){
    return readFile(filename)
        .then(delayMsg)    
}


var fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib'); //non-standard. It attaches to asynquence;



module.exports.say = say;

