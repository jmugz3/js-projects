//console.log(process.argv);
x = process.argv.length;
//console.log(x);
var sum = 0;

for (var i = 2; i < x ; i++){
  sum += +process.argv[i];
  // console.log(" ");
  // console.log("i: %s",i);
  //console.log(process.argv[i]);
  // console.log("sum: %s",sum);
}
console.log(sum);
