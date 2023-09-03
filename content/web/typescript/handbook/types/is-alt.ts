interface Animal { name: string }

interface Cat extends Animal {
  meow: () => any,
}

function isCat(animal: Animal): animal is Cat {
  return animal.name === 'kitty';
}

const pet: Animal = { name: 'kitty' };

if (isCat(pet)) {
  pet.meow();
} else {
  console.log(pet);
}

export {};

// https://stackoverflow.com/a/32713812
// https://stackoverflow.com/a/71856614
