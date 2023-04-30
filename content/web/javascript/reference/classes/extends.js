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
 * While the base class may return anything from its constructor, the derived class
 * must return an object or undefined, or a TypeError will be thrown.
 *
 * The reserved 'super' keyword is for making super-constructor calls and allows
 * access to parent methods.
 *
 * Note: In derived classes, super() must be called before you can use 'this'.
 * Leaving this out will cause a reference error.
 *
 * Methods of a sub class will override the parent's, meaning, that sub class that
 * are missing a method, will fall back to the super class method. This is called Polymorphism.
 *
 * MDN/Web/JavaScript/Reference/Classes/extends
 * https://googlechrome.github.io/samples/classes-es6/index.html
 */

let storedThis;

class Polygon {
  sayName() {
    console.log('Hi, I am a', `${this.name}.`);
  }

  sayWhoIsAwesome() {
    console.log(`${this.name} is awesome`);
  }

  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
    storedThis = this;
  }
}

// const polygon = new Polygon(300, 400);
// polygon.sayName();
// console.log(polygon);
// console.log(`The width of this polygon is ${polygon.width}`);

// ------------------------------------------------

class Square extends Polygon {
  constructor(length) {
    super(length, length);

    // console.log(super.constructor);
    console.log(this === storedThis);

    /** Then you can override or add new properties */
    this.name = 'Square';

    // console.log(this);
  }

  get area() {
    super.sayWhoIsAwesome();

    return this.height * this.width;
  }
}

const square = new Square(5);
square.sayName();
console.log(`The area of this square is ${square.area}`);

// True
// console.log(square instanceof Square);

// True
// console.log(square instanceof Polygon);
