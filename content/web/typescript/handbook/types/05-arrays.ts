/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * There are two ways to set the type of array values.
 *
 * The "array" way:
 */
const fruit: (boolean | string)[] = [];
fruit.push('Banana', true);

/**
 * The "generic" way:
 */
const arrayOfArrays: Array<Array<number>> = [
  [1, 2, 3, 4, 5],
  [],
  [Number('1')],
];

/**
 * The Tuple type is just an array with types that respects the order
 */
const rgb: [number, number, number] = [255, 123, 112];

export {};
