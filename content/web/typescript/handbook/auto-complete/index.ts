import { Person } from './types';
import examplePeople from './people';

const getPersonProperty = <T extends Person, K extends keyof T>(people: T[], key: K): T[K][] => {
  return people.map((person) => person[key]);
};

/** Notice the auto-complete based on the types */
for (const person of examplePeople) {
  // person.
}

/**
 * For more info about Type Inference, @see
 * ..\generics-aliases.ts
 * ..\generic-constraints.ts
*/

/** Inferred types for generics */
// const theirNames = getPersonProperty(examplePeople, 'name');

/** Explicit types for generics */

type KeyofPerson = keyof Person;
// type KeyofPerson = keyof typeof examplePeople[number];

const theirNames = getPersonProperty<Person, KeyofPerson>(examplePeople, 'name');
const theirCities = getPersonProperty<Person, KeyofPerson>(examplePeople, 'city');

console.log(theirNames);
console.log(theirCities);

export {};
