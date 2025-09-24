import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} from '../services/blogService.js';
import { matchedData } from 'express-validator';

export function getAllBlogsHandler(req, res) {
  const query = matchedData(req);
  const result = getAllBlogs(query);
  res.status(200).json(result);
}

export function getBlogByIdHandler(req, res) {
  const id = parseInt(req.params.id);
  const blog = getBlogById(id);
  res.status(200).json(blog);
}

export function createBlogHandler(req, res) {
  const data = matchedData(req);
  const newBlog = createBlog(data);
  res.status(201).json(newBlog);
}

export function updateBlogHandler(req, res) {
  const id = parseInt(req.params.id);
  const data = matchedData(req);
  const updatedBlog = updateBlog(id, data);
  res.status(200).json(updatedBlog);
}

export function deleteBlogHandler(req, res) {
  const id = parseInt(req.params.id);
  deleteBlog(id);
  res.status(204).send();
}