/**
 * Class fields are similar to object properties, not variables, so we don't
 * use keywords such as const to declare them.
 *
 * MDN/Web/JavaScript/Reference/Classes#description
 */

class Rectangle {
  constructor(width) {
    this.width = width;
  }

  height = 10;
}

const rectangle = new Rectangle(50);

console.log(rectangle);

export {};
