/**
 * Nullish coalescing assignment (??=)
 * The nullish coalescing assignment (??=) operator, also known as the logical
 * nullish assignment operator, only assigns if x is nullish (null or undefined).
 *
 * MDN/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
 */

const person = { name: 'Jack', age: 33, dead: false };

person.age = undefined;
person.age ??= 50;

person.dead ??= true;
person.married ??= true;

console.log(person);
