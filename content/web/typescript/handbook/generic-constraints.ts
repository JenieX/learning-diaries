/**
 * TypeScript Generic Constraints are a feature in TypeScript that allow
 * you to restrict the types that can be used as type arguments for a generic
 * type parameter.
 */

interface Person {
  name: string,
  age: number,
}

function findTeenagers<T extends Person>(people: T[]): T[] {
  return people.filter(({ age }) => {
    return age >= 13 && age <= 18;
  });
}

const people: Person[] = [
  { name: 'Alice', age: 18 },
  { name: 'Bob', age: 31 },
  { name: 'Charlie', age: 50 },
  { name: 'Jack', age: 13 },
];

/**
 * The function signature for `findTeenagers` call would be:
 * ```js
 * function findTeenagers<Person>(people: Person[]): Person[]
 * ```
 * Notice that while the type of **`people`** is **`Person[]`**, it is inferred as **`Person`**.
 * You can see that even after removing **`extends Person`** next to the **`T`** parameter above.
 */
const teenagers = findTeenagers(people);
console.log(teenagers);
