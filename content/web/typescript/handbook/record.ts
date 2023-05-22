/**
 * Using Record allows you to create a type with specific keys and values, which can
 * make the type definition more readable and self-documenting. It also allows
 * TypeScript to check that all the keys in the object are of the correct type.
 *
 * The `Record` utility type is similar to using an interface with a fixed set
 * of keys and types, using index signatures. However,`Record` provides an explicit
 * and concise way to define the type, and it enforces the set of keys provided.
 */

type Fruit = 'apple' | 'banana' | 'orange';
type Price = number;

const prices: Record<Fruit, Price> = {
  apple: 0.5,
  banana: 0.25,
  orange: 0.75,
};
