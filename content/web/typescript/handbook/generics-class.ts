class Dictionary<T> {
  setItem(key: string, value: T) {
    this.items[key] = value;
  }

  getItem(key: string): T | undefined {
    return this.items[key];
  }

  removeItem(key: string) {
    delete this.items[key];
  }

  getKeys(): string[] {
    return Object.keys(this.items);
  }

  getValues(): T[] {
    return Object.values(this.items);
  }

  private items: { [key: string]: T } = {};
}

type ValueType = boolean | number | string;

const numberDictionary = new Dictionary<ValueType>();
numberDictionary.setItem('name', 'Jack');
numberDictionary.setItem('age', 21);
numberDictionary.setItem('active', false);

console.log(numberDictionary.getItem('name'));
console.log(numberDictionary.getKeys());
