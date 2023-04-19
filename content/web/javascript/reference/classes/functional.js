/**
 * The example show how the same can be achieved using a function
 */

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = {
  get area() {
    return this.calcArea();
  },

  calcArea() {
    return this.height * this.width;
  },

  * getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  },
};

const rectangle = new Rectangle(50, 10);
console.log(rectangle.area);

// const sidesGenerator = rectangle.getSides();
// console.log(sidesGenerator.next());
// console.log([...sidesGenerator]);

console.log(Object.getOwnPropertyNames(rectangle));

const rectanglePrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(rectangle));
console.log(rectanglePrototype);

export {};
