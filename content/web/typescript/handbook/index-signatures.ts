/**
 * Using index signatures allows you to define the types of properties that can
 * be accessed using an index. This is useful when you want more flexibility in
 * the types of properties that can be accessed using an index.
 *
 * Index signatures are similar to the `Record` utility type, except they allow
 * any string key to be used to access the properties. However, index signatures
 * do not provide type checking for all the keys in the object.
 * In contrast, `Record` enforces a specific set of keys.
 *
 * Additionally, interfaces can have both regular properties and an index
 * signature, in that case, the signature must include all of the possible types of
 * the regular properties.
 */

interface ObjectOfNumbers {
  // [key: string]: number,
  // or
  [index: string]: number | string | undefined,
  name?: string,
  readonly height: number,
}

const polygon: ObjectOfNumbers = {
  width: 50,
  height: 100,
};
