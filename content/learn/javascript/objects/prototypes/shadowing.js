/* eslint-disable unicorn/no-unused-properties */

/**
 * Shadowing properties occurs when an object has a property with the same
 * name as a property on its prototype. In this case, the property
 * on the object "shadows" the property on the prototype, meaning
 * that it takes precedence and is used instead of the property on the
 * prototype when the property is accessed.
 *
 * MDN/Learn/JavaScript/Objects/Object_prototypes#shadowing_properties
 */

const animals = {
  eat: true,
  brainy: false,
};

const mammal = {
  __proto__: animals,
  brainy: true,
};

const human = {
  __proto__: mammal,
  teeth: 32,
};

console.log(animals.brainy);
console.log(mammal.brainy);
console.log(human.brainy);

export {};
