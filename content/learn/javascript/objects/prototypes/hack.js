/* eslint-disable no-proto */

const weirdo = {
  __proto__: Array.prototype,
  // __proto__: Number.prototype,
  // __proto__: RegExp.prototype,
  // __proto__: String.prototype,
};

console.log(weirdo);
console.log(Object.getOwnPropertyNames(weirdo.__proto__));
console.log(Array.prototype.__proto__ === weirdo.__proto__.__proto__);

export {};
