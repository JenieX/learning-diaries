/* eslint-disable no-proto */
/* eslint-disable unicorn/no-unused-properties */

/**
 * JavaScript objects have a link to a prototype object. When trying to access
 * a property of an object, the property will not only be sought on the object
 * but on the prototype of the object, the prototype of the prototype, and so
 * on until either a property with a matching name is found or the end of the
 * prototype chain is reached.
 *
 * MDN/Web/JavaScript/Inheritance_and_the_prototype_chain#inheriting_properties
 */

const obj = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(obj.d);
console.log(obj.__proto__.__proto__.__proto__.__proto__);
