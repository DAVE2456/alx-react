export default function accessImmutableObject(object, array) {
  let value = object;
  for (let key of array) {
    if (value === undefined || value === null) {
      return undefined;
    }
    if (typeof value.get === 'function') {
      value = value.get(key);
    } else {
      value = value[key];
    }
  }
  return value;
}
