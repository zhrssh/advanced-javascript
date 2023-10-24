/** CLOSURES PT.1
 * Similar to the nested function concept, the inner function can access and
 * modify the variables called inside the inner function from the outer function.
 * However, with every call, a new counter variable is initialized to zero.
 * Thus, the counter will always be 1 no matter how many outer function is called.
 *
 *
 */

function outer() {
	let counter = 0;
	function inner() {
		counter++;
		console.log(counter);
	}
	inner();
}
outer();
outer();

/** CLOSURES PT.2
 * In this example, the outer function returns the inner function and stores
 * the function in a variable. This effectively makes the function definition along with
 * the function scope (in this example, counter = 0) persist inside the memory. Thus calling the fn variable twice, will
 * display 1 and 2, instead of 1 and 1.
 */

function outer() {
	let counter = 0;
	function inner() {
		counter++;
		console.log(counter);
	}
	return inner;
}

const fn = outer();
fn();
fn();
