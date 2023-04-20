/**
 * Object.setPrototypeOf() is generally considered the proper way
 * to set the prototype of an object. You should always use it in
 * favor of the deprecated Object.prototype.__proto__ accessor.
 *
 * MDN/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
 */

const human = { breath: true };
const person = { name: 'John' };

Object.setPrototypeOf(person, human);
console.log(person.breath);

const personPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(person));
console.log(personPrototype);

export {};
