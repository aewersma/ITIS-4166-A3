import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/categoryService.js';
import { matchedData } from 'express-validator';

export function getAllCategoriesHandler(req, res) {
  const categories = getAllCategories();
  res.status(200).json(categories);
}

export function getCategoryByIdHandler(req, res) {
  const id = parseInt(req.params.id);
  const category = getCategoryById(id);
  res.status(200).json(category);
}

export function createCategoryHandler(req, res) {
  const data = matchedData(req);
  const newCategory = createCategory(data);
  res.status(201).json(newCategory);
}

export function updateCategoryHandler(req, res) {
  const id = parseInt(req.params.id);
  const data = matchedData(req);
  const updatedCategory = updateCategory(id, data);
  res.status(200).json(updatedCategory);
}

export function deleteCategoryHandler(req, res) {
  const id = parseInt(req.params.id);
  deleteCategory(id);
  res.status(204).send();
}