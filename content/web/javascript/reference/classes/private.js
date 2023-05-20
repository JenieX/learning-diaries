import SigningAlgorithm from './static.js';

/**
 * Class fields are public by default, but private class members can be created
 * by using a hash # prefix.
 *
 * Private properties are declared with # names (pronounced "hash names"), which
 * are identifiers prefixed with #. The hash prefix is an inherent part of
 * the property name.
 *
 * Private properties are not part of the prototypical inheritance model since they can
 * only be accessed within the current class's body and aren't inherited by subclasses.
 * Private properties with the same name within different classes are entirely different
 * and do not interoperate with each other.
 *
 * MDN/Web/JavaScript/Reference/Classes/Private_class_fields
 */

class PrivateKey {
  sign(data) {
    const signature = this.#signData(data);

    return signature;
  }

  #signData(data) {
    return SigningAlgorithm.sign(data, this.#key);
  }

  constructor(key) {
    if (typeof key !== 'number') {
      throw new TypeError('key must be a number');
    }

    this.#key = key;
  }

  #key;
}

PrivateKey.prototype.typicalMethod = () => {
  console.log('Called typicalMethod');
};

const privateKey = new PrivateKey(3);

/**
 * Setting a value of a private field on the instance of class, will not override
 * the private field value.
 */
// privateKey.key = 10;
// console.log(privateKey);

console.log(privateKey.sign(5));

console.log(Object.getOwnPropertyNames(privateKey));
console.log(Object.getOwnPropertyNames(privateKey.__proto__));
