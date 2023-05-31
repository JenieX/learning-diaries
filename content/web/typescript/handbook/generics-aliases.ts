type Box<T> = T[];

const boxOfNumbers: Box<number> = [42, 13, 7];
const boxOfStrings: Box<string> = ['hello', 'world'];

function mapBox<T, U>(box: Box<T>, mapper: (item: T) => U): Box<U> {
  // eslint-disable-next-line unicorn/no-array-callback-reference
  return box.map(mapper);
}

// Inferred types for generics

/**
 * The type parameter T would be inferred as number, since the input array
 * contains numbers. And the type parameter U would also be inferred as number,
 * since the mapper function returns number.
 */
const squaredNumbers = mapBox(boxOfNumbers, (num) => num ** 2);

/**
 * The type parameter T would be inferred as string, since the input array
 * contains strings. And the type parameter U would also be inferred as string,
 * since the mapper function returns string.
 */
const upperCaseStrings = mapBox(boxOfStrings, (str) => str.toUpperCase());

/*
// Explicit types for generics would be like this:

const squaredNumbers = mapBox<number, number>(
  boxOfNumbers,
  (num: number) => num ** 2,
);

const upperCaseStrings = mapBox<string, string>(
  boxOfStrings,
  (str: string) => str.toUpperCase(),
);
 */

console.log(squaredNumbers);
console.log(upperCaseStrings);
