/**
 * keyof is a TypeScript keyword that is used to obtain the union type of
 * all the keys of an object type.
 *
 * @see ./typeof.ts
 */

interface User {
  id: number,
  name: string,
  email: string,
}

// type UserKey = 'email' | 'id' | 'name';
type UserKey = keyof User;

function getUserProperty<T extends UserKey>(key: T, user: User): User[T] {
  return user[key];
}

const user: User = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
};

const name = getUserProperty('name', user);
const id = getUserProperty('id', user);
const email = getUserProperty('email', user);

export {};
