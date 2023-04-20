/**
 * Methods are defined on the prototype of each class instance and are ***shared***
 * by all instances. Methods can be plain functions, async functions, generator
 * functions, or async generator functions.
 *
 * MDN/Web/JavaScript/Reference/Classes#description
 */

class Rectangle {
  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }

  * getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(50, 10);
console.log(rectangle.area);

// const sidesGenerator = rectangle.getSides();
// console.log(sidesGenerator.next());
// console.log([...sidesGenerator]);

console.log(Object.getOwnPropertyNames(rectangle));

const rectanglePrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(rectangle));
console.log(rectanglePrototype);

/** Gets an empty object unlike the function version */
// console.log(Object.getPrototypeOf(rectangle));

export {};
