/**
 * In TypeScript, the Readonly<T> utility type is used to create a new type
 * by making all properties of the original type T read-only.
 */

interface Person {
  name: string,
  age: number,
}

type ReadonlyPerson = Readonly<Person>;

const person: ReadonlyPerson = { name: 'John', age: 30 };

// @ts-expect-error
person.age = 31;

export {};
