/**
 * The constructor method is a special method of a class for creating and initializing
 * an object instance of that class.
 *
 * A class method called constructor cannot be a getter, setter, async, or generator.
 *
 * MDN/Web/JavaScript/Reference/Classes/constructor
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(50, 10);

const rectanglePrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(rectangle));
console.log(rectanglePrototype);

console.log(rectangle);

export {};
