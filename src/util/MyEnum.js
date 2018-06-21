/**
 * Created by Eryk Mariankowski on 21.06.2017.
 */
export default function MyEnum(keys) {
  let i = Object
    .keys(keys)
    .reduce((object, key) => {
      object[keys[key]] = key;
      return object;
    }, {});

  return Object.freeze(
    Object.keys(keys).reduce((object, key) => {
      object[key] = keys[key];
      return object;
    }, v => {
      return i[v];
    }));
}
