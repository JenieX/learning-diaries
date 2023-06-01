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
