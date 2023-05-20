/**
 * The static keyword defines a static method or field for a class, or a static
 * initialization block. Static properties cannot be directly accessed on instances
 * of the class. Instead, they're accessed on the class itself.
 *
 * @see ./private.js
 *
 * MDN/Web/JavaScript/Reference/Classes/static
 */

class SigningAlgorithm {
  typicalMethod() {
    console.log(this.typicalField);
  }

  static sign(data, key) {
    if (typeof data !== 'number') {
      throw new TypeError('Data must be a number');
    }

    const signedData = data * key;

    return signedData;
  }

  typicalField = 1;
  static info = 'This is a class for signing data';
}

console.log(SigningAlgorithm.info);
console.log(Object.getOwnPropertyNames(SigningAlgorithm));

// const signer = new SigningAlgorithm();
// signer.typicalMethod();

export default SigningAlgorithm;
