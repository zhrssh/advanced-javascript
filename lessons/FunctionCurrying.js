/** FUNCTION CURRYING
 * Combines a function with multiple arguments to a function with multiple calls.
 * This is useful if you want the to set the first argument of a function and
 * call the next functions at a later time.
 */

function sum(a, b, c) {
	return a + b + c;
}

console.log(sum(2, 3, 5));

// transform sum(2,3,5) to sum(2)(3)(5)

function curry(fn) {
	return function (a) {
		return function (b) {
			return function (c) {
				return fn(a, b, c);
			};
		};
	};
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);
