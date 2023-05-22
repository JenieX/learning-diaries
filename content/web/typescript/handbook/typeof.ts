/**
 * The typeof operator is used to obtain the type of the someObject
 * expression at runtime. This can be useful if you want to create
 * a type that represents the keys of an object dynamically, without
 * having to hard-code them in the type definition.
 *
 * @see ./keyof.ts
 */

const person = {
  name: 'John',
  age: 30,
  address: '123 Main St',
};

type TypeofPerson = typeof person;

// type PersonKey = 'address' | 'age' | 'name';
type PersonKey = keyof TypeofPerson;

function getProperty<T extends PersonKey>(key: T, obj: TypeofPerson): TypeofPerson[T] {
  return obj[key];
}

const name = getProperty('name', person);
const age = getProperty('age', person);
const address = getProperty('address', person);

export {};
