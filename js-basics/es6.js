// PROMISES

function tellme() {
  return new Promise(function (response, reject){
    if( condition === true) {
      resolve("I fulfill promises");
    }
    else {
      reject(Error("I reject this promise"));
    }
  });
}


tellme.then(function(message) {
  console.log(message);
})
.catch(function(err) {
  console.log(err);
})