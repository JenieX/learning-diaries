/**
 * In TypeScript, the NonNullable<T> utility type is used to create a new type by
 * removing the null and undefined types from an existing type T.
 */

type NullableOr<T> = T | null | undefined;

interface Person {
  name: string,
  age?: number,
  address: NullableOr<string>,
}

type RequiredPerson = {
  [K in keyof Person]-?: NonNullable<Person[K]>
};

const person: RequiredPerson = {
  name: 'John',
  age: 30,
  address: '123 Main St.',
};

export {};
