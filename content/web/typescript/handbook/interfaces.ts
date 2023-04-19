/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Type inferences, similar to type aliases, allow you
 * to create a new name for an existing type.
 */
interface User { name: string, age: number }
interface Result { name: string, ok: boolean }

function saveUserInfo({ name }: User): Result {
  return { name, ok: true };
}

/**
 * Combing type inferences
 */
interface AwesomeUser extends User /* , AnotherInterface */ {
  awesome: true,
}

const me: AwesomeUser = {
  name: 'JenieX',
  age: 31,
  awesome: true,
  active: false,
};

// You can re-open the interface, and add new fields.
// Unlike type aliases, which can not do that.
interface User {
  active: boolean,
}

export {};
