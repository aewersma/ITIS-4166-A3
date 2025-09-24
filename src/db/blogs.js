export const blogs = [
  {
    id: 1,
    title: 'First Blog',
    content: 'This is the content of the first blog.',
    author: 'arthur',
    isPublished: false,
    createdAt: '2025-06-01T10:00:00Z',
    updatedAt: null,
    publishedAt: null,
  },
];
let nextId = blogs.length;

export function getNextId() {
  nextId++;
  return nextId;
}

export function resetDb() {
  blogs.length = 0;
  nextId = blogs.length;
}