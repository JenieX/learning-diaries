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
