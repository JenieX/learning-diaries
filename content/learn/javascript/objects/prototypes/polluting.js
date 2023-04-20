/* eslint-disable unicorn/no-unused-properties */
/* eslint-disable no-proto */

/**
 * All objects created with the {} syntax have the special __proto__ wire
 * pointing to a default Object Prototype. Mutating a shared prototype like
 * the default object prototype, is called prototype pollution, which should
 * be avoided.
 */

const obj = {};
obj.__proto__.hacked = 'yes';

const person = { name: 'John' };
console.log(person.hacked);

export {};
