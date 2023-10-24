/** PROTOTYPE
 * This is mostly similar to the classes concept of OOP. Prototype is useful to
 * dynamically assign new properties and attributes to an instance or prototype.
 */
function Person(fName, lName) {
	this.firstName = fName;
	this.lastName = lName;
}

const person1 = new Person("Bruce", "Wayne");
const person2 = new Person("Clark", "Kent");

// Javascript allows us to attach new properties to an object
// person1.getFullName = function () {
// 	return this.firstName + " " + this.lastName;
// };

// This won't work on person2 since we did not attach a new property "getFullName" to person2
// console.log(person1.getFullName());

/**
 * Using Prototype to attach new property to all instances
 */
Person.prototype.getFullName = function () {
	return this.firstName + " " + this.lastName;
};

// console.log(person1.getFullName());
// console.log(person2.getFullName());

/**
 * PROTOTYPAL INHERITANCE
 */
function Superhero(fName, lName) {
	// this = {}
	Person.call(this, fName, lName); // This allows Superhero to inherit fName and lName attributes
	this.isSuperHero = true;
}

Superhero.prototype.fightCrime = function () {
	console.log("Fighting crime");
};

Superhero.prototype = Object.create(Person.prototype); // Allows Superhero to inherit the getFullName function.

const batman = new Superhero("Bruce", "Wayne");
Superhero.prototype.constructor = Superhero; // Ensures that the Superhero is not constructed from Person
console.log(batman.getFullName());
