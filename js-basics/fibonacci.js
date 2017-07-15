// fibonacci is the sequence in which each number is the sum of previous two

// 
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// F(x) = F(x-1) + F(x-2)

// first try : LOOP

function fibonacci(x) {
  var x0 = 0, x1 = 1, temp;
  
  for (var i = 0; i < x - 1; i++) { 
    temp = x1 + x0;
    x0 = x1;
    x1 = temp;
  }
  return x1;
}



// second try : RECURSION

function fibonacci2(x) {
  if (x <= 1 ) { return 1 };

  return fibonacci2(x - 1) + fibonacci(x -2);
}


fibNumber = 100;
for (var y = 0; y < fibNumber; y++) {
  // console.log(`fibonacci(${y}) : ${fibonacci(y)}`);
  console.log(`fibonacci2(${y}) : ${fibonacci2(y)}`);
}



//check this function!!
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}