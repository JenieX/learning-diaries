/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Type assertions are a way to tell the TypeScript compiler
 * that you are certain about the type of a value, even if it
 * cannot infer it automatically.
 *
 * Type casting is the process of converting a value from one
 * type to another. Type casting is generally used when you
 * want to change the type of a value to a more specific or
 * appropriate type.
 *
 * Both use the same syntax for both purposes.
 */
const someValue: any = 'This is a string';
const strLength: number = (someValue as string).length;

/**
 * Another example from "Dave Gray", shows how to convert
 * to more or less specific type.
 */
type One = string;
type Two = number | string;
type Three = 'hello';

const a: One = 'hello';
const b = a as Two;
const c = a as Three;

/**
 * When you use type assertions, TS compiler will trust you,
 * but not if you are trying something that isn't possible like:
 * ```js
 * 10 as string;
 * ```
 * If you want to achieve that, you will have to
 * use the 'unknown' type and have two assertions.
 */
const impossibleMadePossible = (10 as unknown) as string;

/**
 * The non-null assertion operator is a post-fix operator that is
 * applied to a variable or expression, and it tells TypeScript to
 * assume that the value is not null or undefined, even if the type
 * of the variable or expression includes these types.
 *
 * Below example would achieve the same as:
 * ```js
 * document.querySelector('img') as HTMLImageElement;
 * ```
 */
const img = document.querySelector('img')!;
