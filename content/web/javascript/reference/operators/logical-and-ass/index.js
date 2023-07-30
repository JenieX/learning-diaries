/**
 * Logical AND assignment
 * The logical AND assignment (x &&= y) operator only assigns if x is truthy.
 *
 * MDN/Web/JavaScript/Reference/Operators/Logical_AND_assignment
 */

const person = { name: 'Jack', /* age: 30, */ happy: true, phoneNumber: 9_783_233_421 };

person.happy &&= false;
person.phoneNumber &&= 'Unknown';

// Next two lines' results are not exactly the same!
person.age &&= 44;
// person.age = person.age && 44;

console.log(person);
