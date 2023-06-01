/**
 * In TypeScript, the Extract<T, U> utility type is used to create a new type
 * by taking an existing type T and extracting only the types that are assignable
 * to the types in U.
 */

type Animal = 'bird' | 'cat' | 'dog' | 'fish';
type DomesticAnimal = 'cat' | 'dog';

type Pet = Extract<Animal, DomesticAnimal>;

const pet: Pet = 'cat';

// @ts-expect-error
const wildAnimal: Pet = 'bird';

export {};
