/** NESTED FUNCTION SCOPE
 * Nested function scope. In this example, the JavaScript engine
 * starts at the inner most function, therefore, c is passed in the log first.
 * If the variable is not available in the inner function, it goes one level
 * higher, therefore, b, gets passed in the log second. And lastly, it
 * goes another level higher, therefore, c, gets passed in the log last.
 *
 * Scopes:
 * Inner --> Outer --> Global
 */

let a = 10;
function outer() {
	let b = 20;
	function inner() {
		let c = 30;
		console.log(a, b, c);
	}
	inner();
}
outer();
