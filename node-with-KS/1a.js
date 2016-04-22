//2.js

function printHelp() {
    console.log("1a.js (c) Jose Mugaburu");
    console.log("");
    console.log("usage:");
    console.log("--help     print this help");
    console.log("--name     say hello to {NAME}");
    console.log("--file     read the file {NAME} and output");
    console.log("");
}


var args = require("minimist")(process.argv.slice(2), {string: "file" });

if (args.help || !args.file){
    printHelp();
    process.exit(1);
}

var hello = require("./helloFoo.js")

var contents = hello.say(args.file, function(err,contents){
    if(err) {
        console.error("Error: " + err);
    } else {
        console.log(contents.toString());
    }    
});

