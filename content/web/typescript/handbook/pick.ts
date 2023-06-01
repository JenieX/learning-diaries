/**
 * In TypeScript, the Pick<T, K> utility type is used to create a new type by
 * taking an existing type T and selecting only a subset of its properties
 * specified by the K union type.
 */

interface Person {
  name: string,
  age: number,
  address: string,
  email: string,
}

type PersonBasicInfo = Pick<Person, 'age' | 'name'>;

const person: PersonBasicInfo = { name: 'John', age: 30 };
