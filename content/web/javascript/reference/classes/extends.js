/* eslint-disable no-proto */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */

/**
 * The extends keyword can be used to subclass custom classes as well as built-in objects.
 *
 * Any constructor that can be called with new and has the prototype property can
 * be the candidate for the parent class. The two conditions must both hold — for
 * example, bound functions and Proxy can be constructed, but they don't have
 * a prototype property, so they cannot be subclassed.
 *
 * The prototype property of the ParentClass must be an Object or null.
 *
 * MDN/Web/JavaScript/Reference/Classes/extends
 */

function Rectangle(width, height) {
  this.isShape = true;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.logArea = function logArea() {
  console.log(this.height * this.width);
};

class ColoredRectangle extends Rectangle {}
const coloredRectangle = new ColoredRectangle(50, 10);
// console.log(coloredRectangle);

// console.log(Object.getOwnPropertyNames(ColoredRectangle.__proto__));

// console.log();

function name(params) {}

// console.log(name.__proto__ === Rectangle.__proto__);

/**
 * Allows inheritance of static properties.
 * Next line evaluates to True
 */
console.log(ColoredRectangle.__proto__ === Rectangle);

/**
 * Allows inheritance of instance properties.
 * Next line evaluates to True
 */
console.log(ColoredRectangle.prototype.__proto__ === Rectangle.prototype);

// class ModernClass {
//   someProperty = 1;
//   someMethod() {}
// }

// class AnotherChildClass extends ModernClass {}
