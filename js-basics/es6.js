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


tellme().then(function(message) {
  console.log(message);
})
.catch(function(err) {
  console.log(err);
})


// CHAINING PROMISES

function add2(num) {
  return new Promise(function(response, request){
    if (num && num > 0) {
      resolve(num + 2);
    } else {
      reject(Error("This is not a number"))
    }
  });
}

add2(5).then(function(number){
  return number + 3;
})
.then(function(number){
  return number + 4;
})
.catch(function(err){
  console.log(err);
});


// ARRAY OF PROMISES

Promise.all([
  add2(5),
  add2(7)
]);