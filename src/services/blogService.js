import { getAll, getById, create, update, remove } from '../repositories/blogRepo.js';

export function getAllBlogs(query) {
  return getAll(query);
}

export function getBlogById(id) {
  const result = getById(id);
  if (result) {
    return result;
  }
  const error = new Error(`Cannot find blog with ID: ${id}`);
  error.status = 404;
  throw error;
}

export function createBlog(data) {
  const now = new Date().toISOString();
  const blog = {
    title: data.title,
    content: data.content,
    author: data.author,
    isPublished: data.isPublished || false,
    createdAt: now,
    updatedAt: now,
    publishedAt: data.isPublished ? now : null,
  };
  return create(blog);
}

export function updateBlog(id, data) {
  if (!data || Object.keys(data).length === 0) {
    const error = new Error('No updatable fields provided.');
    error.status = 400;
    throw error;
  }

  const updatedBlog = update(id, data);

  if (updatedBlog) {
    return updatedBlog;
  }
  
  const error = new Error(`Cannot find blog with ID: ${id}`);
  error.status = 404;
  throw error;
}

export function deleteBlog(id) {
  const wasDeleted = remove(id);

  if (!wasDeleted) {
    const error = new Error(`Cannot find blog with ID: ${id}`);
    error.status = 404;
    throw error;
  }
}