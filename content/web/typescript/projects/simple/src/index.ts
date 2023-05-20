// tsc -w

// Notice the the appending of `.js` extension
// https://github.com/microsoft/TypeScript/issues/16577
import { setDate } from './js/set-date.js';

console.log('Hello world');
setDate();

console.log(30 / 5);
