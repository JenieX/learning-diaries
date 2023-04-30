/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

/**
 * Polymorphism is a core concept in object-oriented programming, and it's often
 * achieved through inheritance and method overriding. In JavaScript, classes can
 * achieve polymorphism through inheritance and method overriding, just like in other
 * object-oriented programming languages.
 */

class Animal {
  makeSound() {
    return 'silent!';
  }

  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound() {
    return 'Meow!';
  }
}

class Spider extends Animal {}

const animals = [
  new Dog('The dog'),
  new Cat('the Cat'),
  new Spider('The spider'),
];

for (const animal of animals) {
  console.log(`${animal.name}: ${animal.makeSound()}`);
}
