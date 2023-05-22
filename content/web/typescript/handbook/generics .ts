/**
 * TypeScript generics are a powerful feature that allows you to write
 * code that can be used with different data types. Generics enable you
 * to create reusable and generalized functions, classes, and interfaces.
 *
 * They provide a way to define a type or interface without specifying
 * the exact type of data it will work with. Instead, you can use a
 * placeholder type parameter that will be replaced with a specific
 * type when the generic code is used.
 */

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const user = { name: 'Alice', age: 30 };
const data = { id: 123, isActive: true };

// Call mergeObjects with inferred types (inferred)
const merged1 = mergeObjects(user, data);

// Call mergeObjects with explicit types (explicit)
const merged2 = mergeObjects<typeof user, typeof data>(user, data);
