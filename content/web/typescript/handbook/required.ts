/**
 * The Required utility type in TypeScript allows you to create a new type
 * by taking an existing type T and making all of its properties required.
 */

interface Person {
  name?: string,
  age?: number,
  address?: string,
}

type RequiredPerson = Required<Person>;

const person: RequiredPerson = {
  name: 'John',
  age: 30,
  address: '123 Main St.',
};

export {};
