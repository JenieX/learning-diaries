interface KeyValuePair<K, V> {
  key: K,
  value: V,
}

function printKeyValuePair<K, V>(pair: KeyValuePair<K, V>) {
  console.log(`Key: ${pair.key}, Value: ${pair.value}`);
}

const pair1: KeyValuePair<number, string> = { key: 1, value: 'one' };
const pair2: KeyValuePair<string, boolean> = { key: 'true', value: true };

printKeyValuePair(pair1);
printKeyValuePair(pair2);
