/** THIS keyword
 * THIS refers to the object it belongs to.
 */

function sayMyName(name) {
	console.log(`My name is ${name}`);
}

sayMyName("Walter White");
sayMyName("Heisenberg");

/**
 * IMPLICIT BINDING - Binds the "this" keyword to the object where it was defined.
 */
const person = {
	name: "Vishwas",
	sayMyName: function () {
		console.log(`My name is ${this.name}`);
	},
};

// When a function of an object is called. The "this" keyword refers to the "person".name which equals to "Vishwas"
person.sayMyName();

/**
 * EXLICIT BINDING - Invokes the call function with the object as an argument to bind the function definition to the
 * passed object.
 */
function sayMyName() {
	console.log(`My name is ${this.name}`);
}

// The argument passed on call function will set the "this" keyword to refer to the object passed.
sayMyName.call(person);

/**
 * NEW BINDING - This is similar to classes. The "this" keyword is binded to the object called by the "new" keyword.
 */
function Person(name) {
	// this = {}
	this.name = name;
}

// The Person function is also known as constructor function
const p1 = new Person("Vishwas");
const p2 = new Person("Batman");

console.log(p1.name, p2.name);

/**
 * DEFAULT BINDING - Since "this" keyword is not binded, the "this" keyword will then look at the global scope.
 * The "this" keyword will rely on the global scope.
 */
// const name = "Superman" // For browser
globalThis.name = "Superman"; // For node
sayMyName();
