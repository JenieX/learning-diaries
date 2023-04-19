/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

/**
 * Type is inferred when initiated with a primitive value
 */
let dead = false;
dead = true;

/**
 * When the type of variable is known, TypeScript will provide
 * auto complete for its methods, and disallows unknown methods.
 */
const user: string = 'JenieX';
user.includes('i');

/**
 * Literal types allows you to define a type that accepts only the specified string(s)
 */
let size: 'large' | 'small';
size = 'large';
size = 'small';

export {};
