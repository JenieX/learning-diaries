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
 * The never type represents the type of values that never occur.
 * Another example, a function that has an infinite loop returns never.
 */
function fail(msg: string): never {
  throw new Error(msg);
}

/**
 * A use for the never type
 */
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') {
    return 'string';
  }

  if (typeof value === 'number') {
    return 'number';
  }

  // To solve the issue, return a never value
  return fail('Something went wrong');
};

/**
 * Rest Parameters annotation
 */
const getMax = (log: boolean, ...nums: number[]): number => {
  const max = Math.max(...nums);

  if (log === true) {
    console.log(max);
  }

  return max;
};

getMax(true, 1, 2, 3, 4, 5);

export {};
