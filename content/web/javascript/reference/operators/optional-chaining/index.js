/**
 * Optional chaining (?.)
 * The optional chaining (?.) operator accesses an object's property or calls a function.
 * If the object accessed or function called using this operator is undefined or null,
 * the expression short circuits and evaluates to undefined instead of throwing an error.
 *
 * MDN/Web/JavaScript/Reference/Operators/Optional_chaining
 */

const person = {
  name: 'John',
  age: 30,
  getInfo: {},
};

const phoneNumber = person.getInfo.phoneNumber?.();

console.log(phoneNumber);
