//Extends js into an environment provided by host. (e.g. V8)

//These are the same
//console.log('Hello foo');
//process.stdout.write('Hello foo\n');

// var name = process.argv[2];
// console.log('Hello ' + name);


var args = require("minimist")(process.argv.slice(2), {string: "name" });

if (args.help || !args.name){
    printHelp();
    process.exit(1);
}

var name = args.name;

console.log('Hello ' + name);


//turn this file into an executable script
//#!/usr/bin/env node  
// Here is how to execute
// chmod 700 1.js
// ./1.js --name = "foo"  

function printHelp() {
    console.log("1.js (c) Jose Mugaburu");
    console.log("");
    console.log("usage:");
    console.log("--help     print this help");
    console.log("--name     say hello to {NAME}");
    console.log("");
}