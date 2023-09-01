/**
 * A User-Defined Type Guard in TypeScript is a custom function that helps the
 * TypeScript compiler narrow down the type of a variable within a certain code
 * block. It's a way to provide more specific type information to TypeScript
 * based on your own logic.
 *
 * Try hovering over the unused expressions below and see what the IntelliSense
 * says about its type, when using either `isBananaX` and `isBanana`.
 */

type Fruit = 'apple' | 'banana' | 'orange';

function isBanana(fruit: Fruit): fruit is 'banana' {
  return fruit === 'banana';
}

function isBananaX(fruit: Fruit): boolean {
  return fruit === 'banana';
}

function describeFruit(fruit: Fruit): void {
  if (isBanana(fruit)) {
    fruit;
    console.log('Fruit is a banana!');

    return;
  }

  fruit;
  console.log('Fruit is apple or orange.');
}

const myFruit: Fruit = 'banana';

describeFruit(myFruit);

export {};
