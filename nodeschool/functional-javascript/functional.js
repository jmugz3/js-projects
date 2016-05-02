'use strict';

function repeat(f, num){
	if (num >= 10) return
	f();
	return repeat(f, ++num)
}

module.exports = repeat
