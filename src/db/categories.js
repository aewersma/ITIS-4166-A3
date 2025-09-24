export const categories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Lifestyle' },
];

let nextId = categories.length;

export function getNextId() {
  nextId++;
  return nextId;
}

export function resetDb() {
  categories.length = 0;
  nextId = categories.length;
}