export function mergeObjects(obj: Object) {
  const keys = Object.keys(obj);
  const mergedObject = keys.reduce((acc, cur) => ({ ...acc, ...obj[cur] }), {});
  return mergedObject;
}
