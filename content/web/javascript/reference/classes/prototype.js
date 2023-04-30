/* eslint-disable no-proto */

/**
 * The value of someClass.__proto__ is the same value of Object.getPrototypeOf(someClass).
 *
 * An object that is create by someClass, doesn't have a prototype property, it has the
 * __proto__ property which points to the same value as someClass's prototype.
 *
 * The __proto__ property of someClass itself, is the prototype of the object Function
 */

function Rectangle(width, height) {
  this.isShape = true;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.logArea = function logArea() {
  console.log(this.height * this.width);
};

// True
console.log(Rectangle.__proto__ === Object.getPrototypeOf(Rectangle));

const rectangle = new Rectangle(50, 10);
// console.log(rectangle.prototype);

// True
console.log(Rectangle.prototype === rectangle.__proto__);

// True
console.log(Object.prototype === rectangle.__proto__.__proto__);
// console.log(Object.prototype === Rectangle.prototype.__proto__);

// .

// True
console.log(Function.prototype === Rectangle.__proto__);

// True
console.log(Object.prototype === Rectangle.__proto__.__proto__);
// console.log(Object.prototype === Function.prototype.__proto__);

// .

console.log('------------Summary------------');

// Is Rectangle.prototype
console.log(rectangle.__proto__);

// Is Object.prototype
console.log(rectangle.__proto__.__proto__);

// Is null
console.log(rectangle.__proto__.__proto__.__proto__);
