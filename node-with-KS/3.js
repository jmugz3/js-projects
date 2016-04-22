//2.js

function printHelp() {
    console.log("2.js (c) Jose Mugaburu");
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

var hello = require("./helloFoo3.js")

//final step in the sequence, so it is synchronous.
hello.say(args.file)
    .val(function(contents){
        console.log(contents.toString());
    })
    .or(function(err){
        console.error("Error: " + err); 
    });



