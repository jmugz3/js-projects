

function printMe(){
  console.log(this.process.versions);
  console.log(this.process.argv === process.argv);
  console.log(this.process.env);
  console.log(this.process.config);
}

printMe();
