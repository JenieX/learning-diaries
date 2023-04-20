/**
 * The hasOwnProperty() method returns a boolean indicating
 * whether the object has the specified property as its own
 * property (as opposed to inheriting it).
 *
 * MDN/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */

const myObject = {};
myObject.awesome = true;

console.log(Object.prototype.hasOwnProperty.call(myObject, 'awesome'));
console.log(Object.prototype.hasOwnProperty.call(myObject, 'toString'));
console.log(Object.prototype.hasOwnProperty.call(myObject, 'hasOwnProperty'));
