export default function removeObjectKeys (obj = {}, keys = []) {
  let newObj = { ...obj };

  keys.forEach(key => delete newObj[key]);

  return newObj;
}
