import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../repositories/categoryRepo.js';

export function getAllCategories() {
  return getAll();
}

export function getCategoryById(id) {
  const category = getById(id);
  if (!category) {
    const error = new Error(`Cannot find category with ID: ${id}`);
    error.status = 404;
    throw error;
  }
  return category;
}

export function createCategory(data) {
  const newCategory = { name: data.name };
  return create(newCategory);
}

export function updateCategory(id, data) {
  getCategoryById(id);

  const updatedCategory = update(id, data);
  return updatedCategory;
}

export function deleteCategory(id) {
  const wasDeleted = remove(id);
  if (!wasDeleted) {
    const error = new Error(`Cannot find category with ID: ${id}`);
    error.status = 404;
    throw error;
  }
}