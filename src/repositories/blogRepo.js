import { blogs, getNextId } from '../db/blogs.js';

export function getAll(query) {
  let result = [...blogs];
  if (query.author) {
    // No .toLowerCase() needed, sanitized by middleware
    result = result.filter(blog => blog.author === query.author);
  }

  if (query.title) {
    // No .toLowerCase() needed, sanitized by middleware
    result = result.filter(blog =>
      blog.title.toLowerCase().includes(query.title)
    );
  }

  if (query.published) {
    // No .toString() or .toLowerCase() needed, sanitized to a boolean
    result = result.filter(blog => blog.isPublished === query.published);
  }

  return result;
}

export function getById(id) {
  return blogs.find(blog => blog.id === id);
}

export function create(blog) {
  const id = getNextId();
  const newBlog = { id, ...blog };
  blogs.push(newBlog);
  return newBlog;
}

export function update(id, updates) {
  const index = blogs.findIndex(blog => blog.id === id);

  if (index !== -1) {
    const updatedBlog = {
      ...blogs[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    blogs[index] = updatedBlog;
    return updatedBlog;
  }
  return null;
}

export function remove(id) {
  const index = blogs.findIndex(blog => blog.id === id);

  if (index !== -1) {
    blogs.splice(index, 1);
    return true;
  }
  return false;
}