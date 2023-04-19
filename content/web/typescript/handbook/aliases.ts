/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { type } from 'node:os';

/**
 * Type aliases allow you to create a new name for an existing type
 */
type User = { name: string, age: number };
type Result = { name: string, ok: boolean };

const user = {
  name: 'JenieX',
  age: 31,
};

function saveUserInfo({ name }: User): Result {
  return { name, ok: true };
}

/**
 * To make a property immutable, add `readonly` before the property name
 * To make a property optional, add `?` after the property name
 */
type AwesomeUser = {
  readonly id: number,
  name: string,
  awesome: boolean,
  gender?: string,
};

const awesomeUser: AwesomeUser = {
  id: 137,
  name: 'JenieX',
  awesome: true,
};

/**
 * Combing type aliases
 */
type Me = AwesomeUser & User & {
  dead: boolean,
};

const me: Me = {
  id: 137,
  name: 'JenieX',
  age: 31,
  awesome: true,
  dead: false,
};

/**
 * You can set the signature for a function to avoid annotations.
 *
 * Note that this doesn't work with function deceleration
 */
type FunctionDefinition = (someUser: string) => string;

const someFunction: FunctionDefinition = (someUser) => {
  return `Hello ${someUser}`;
};

export {};
