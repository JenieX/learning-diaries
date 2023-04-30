/* eslint-disable no-proto */

function Rectangle(width, height) {
  this.isShape = true;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.logArea = function logArea() {
  console.log(this.height * this.width);
};

class ColoredRectangle extends Rectangle {}

/**
 * Allows inheritance of static properties.
 * Next line evaluates to True
 */
console.log(ColoredRectangle.__proto__ === Rectangle);

// True
console.log(ColoredRectangle.__proto__.__proto__ === Function.prototype);

/**
 * Allows inheritance of instance properties.
 * Next line evaluates to True
 */
console.log(ColoredRectangle.prototype.__proto__ === Rectangle.prototype);

// Extra
console.log(ColoredRectangle.prototype);
