/* eslint-disable no-proto */

/**
 * The __proto__ getter function exposes the value of the
 * internal [[Prototype]] of an object.
 *
 * The __proto__ setter allows the [[Prototype]] of an object
 * to be mutated. The value provided must be an object or null.
 * Providing any other value will do nothing.
 *
 * Note: The use of __proto__ is controversial and discouraged.
 * Its existence and exact behavior have only been standardized
 * as a legacy feature to ensure web compatibility, while it presents
 * several security issues. For better support, prefer:
 * ```js
 * Object.getPrototypeOf() || Reflect.getPrototypeOf()
 * Object.setPrototypeOf() || Reflect.setPrototypeOf()
 * ```
 * instead.
 *
 * MDN/Web/JavaScript/Reference/Global_Objects/Object/proto
 */

const human = { breath: true };
const person = { name: 'John' };

person.__proto__ = human;
console.log(person.breath);

const personPrototype = person.__proto__;
console.log(personPrototype);

export {};
