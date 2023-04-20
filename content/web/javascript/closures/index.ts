/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function's scope
 * from an inner function.
 *
 * MDN/Web/JavaScript/Closures
 */

function makeFunc(): DisplayName {
  const name = 'Mozilla';

  const displayName: DisplayName = () => {
    console.log(name);
  };

  return displayName;
}

const thatDisplayNameFunc = makeFunc();
thatDisplayNameFunc();

type DisplayName = () => void;
