/* eslint-disable @typescript-eslint/no-base-to-string */

/**
 * Prototypes are the mechanism by which JavaScript objects inherit
 * features from one another.
 *
 * Every object in JavaScript has a built-in property, which is called
 * its prototype. The prototype is itself an object, so the prototype
 * will have its own prototype, making what's called a prototype chain.
 * The chain ends when we reach a prototype that has null for its own prototype.
 *
 * By specifying __proto__ (also known as our object’s prototype),
 * we instruct JavaScript to continue looking for missing properties
 * on that object instead.
 *
 * MDN/Learn/JavaScript/Objects/Object_prototypes
 */

const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();
myObject.toString();
myObject.valueOf();

/**
 * Inspecting these other properties that exist on the object prototype:
 */
const myObjectPrototype = Object.getOwnPropertyNames(Object.getPrototypeOf(myObject));
console.log(myObjectPrototype);

export {};
