/**
 * Omit is a utility type that creates a new type by omitting a set of
 * properties from an existing type.
 */

interface Example {
  foo: string,
  bar: number,
  baz: boolean,
}

type ExampleWithoutBar = Omit<Example, 'bar'>;

const example: Example = {
  foo: 'Hello',
  bar: 123,
  baz: true,
};

const exampleWithoutBar: ExampleWithoutBar = {
  foo: 'Hello',
  baz: true,
};
