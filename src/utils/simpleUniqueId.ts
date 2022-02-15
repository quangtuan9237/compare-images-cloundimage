let lastId = 0;

export function simpleUniqueId(prefix = 'id') {
  lastId++;
  return `${prefix}${lastId}`;
}
