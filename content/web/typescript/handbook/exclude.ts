/**
 * In TypeScript, the Exclude<T, U> utility type is used to create a new type
 * by taking an existing type T and excluding all the types that are assignable
 * to the types in U.
 */

type Animal = 'bird' | 'cat' | 'dog' | 'fish';
type DomesticAnimal = 'cat' | 'dog';

type WildAnimal = Exclude<Animal, DomesticAnimal>;

const wildAnimal: WildAnimal = 'bird';

// @ts-expect-error
const domesticAnimal: WildAnimal = 'dog';
