/* eslint-disable @typescript-eslint/no-mixed-enums */
/* eslint-disable @typescript-eslint/prefer-enum-initializers */

/**
 * Enumerated type is a group of named constant values.
 * It starts at zero unless assigned with a number.
 *
 * Adding `const` before the keyword, generates less JS code when compiled.
 * Hover over the constants inside to inspect their values.
 */
const enum Choices {
  header = 'Hello!',
  start = 10,
  middle,
  end,
}

const position = Choices.middle;
console.log(position);

export {};
