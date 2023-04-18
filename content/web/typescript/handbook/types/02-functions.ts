/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Return Type is inferred but args need to be specified when
 * the option `noImplicitAny` is set to true. Hover over the name
 * of the function to see its signature.
 */
function getString(number: number) {
  number.toString();
}

/**
 * Type is inferred in args with default values
 */
function greet(num = 1, bol = false): string {
  return 'Hello';
}

/**
 * The never type represents the type of values that never occur
 */
function fail(msg: string): never {
  throw new Error(msg);
}

export {};
