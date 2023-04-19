/**
 * Classes are a template for creating objects. They encapsulate data with code
 * to work on that data. Classes in JS are built on prototypes but also have
 * some syntax and semantics that are unique to classes.
 *
 * A class can be defined in two ways: a class expression or a class declaration.
 *
 * Like function expressions, class expressions may be anonymous, or have a name
 * that's different from the variable that it's assigned to.
 *
 * Unlike function declarations, class declarations are not hoisted, which means
 * you cannot use a class before it is declared.
 *
 * If you don't provide your own constructor, then a default constructor will be
 * supplied for you. If your class is a base class, the default constructor is empty.
 *
 * MDN/Web/JavaScript/Reference/Classes
 */

class Player {
  // constructor() {}
}

const player = new Player();
console.log(player);

export {};
