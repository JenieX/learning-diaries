/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Type inferences, similar to type aliases, allow you
 * to create a new name for an existing type.
 */
interface User { name: string, age: number }
interface Result { name: string, ok: boolean }

const user = {
  name: 'JenieX',
  age: 31,
};

function saveUserInfo({ name }: User): Result {
  return { name, ok: true };
}

export {};
