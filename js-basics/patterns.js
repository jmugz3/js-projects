/**
 *  RECURSION
 */


function test(x) {
    if (x < 1){
        console.log(x);
        return;
    }
    return test(x -1);
}

// test(10);

function test2(y) {
    console.log(y);
    return y > 1 ? test2(y - 1): console.log(0);
}

test2(5);

/**
 *  MODULE PATTERN
 */



/**
 *  PROTOTYPE PATTERN
 */


/**
 *  MODULE PATTERN
 */

/**
 *  SINGLETON
 */