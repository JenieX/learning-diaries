/* eslint-disable no-extend-native */
/* eslint-disable unicorn/no-unused-properties */
/* eslint-disable no-proto */

/**
 * All objects created with the {} syntax have the special __proto__ wire
 * pointing to a default Object Prototype. Mutating a shared prototype like
 * the default object prototype, is called prototype pollution, which should
 * be avoided.
 */

const obj = {};
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__);

/** First method */
Object.prototype.whyNot = () => {
  console.log('Because Object prototype is read only');
};

/**
 * Second method
 *
 * Which is basically the same, since the `prototype` property on
 * `Object`, points to the same value as the `__proto__` property on
 * every instance of object. Here it is `obj` in the example.
 */
obj.__proto__.hacked = 'Yes';

const person = { name: 'John' };

console.log(person.hacked);
person.whyNot();

console.log(Object.getOwnPropertyNames(person.__proto__));

export {};
