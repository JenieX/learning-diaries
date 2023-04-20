/**
 * The Object.getOwnPropertyNames() static method returns an array
 * of all properties (including non-enumerable properties except for
 * those which use Symbol) found directly in a given object.
 *
 * MDN/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
 */

const myObject = { a: 1, b: 2, c: 3 };

console.log(Object.getOwnPropertyNames(myObject));

export {};
