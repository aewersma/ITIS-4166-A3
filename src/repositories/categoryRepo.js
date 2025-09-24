import { categories, getNextId } from '../db/categories.js';

export function getAll() {
  return [...categories];
}

export function getById(id) {
  return categories.find(cat => cat.id === id);
}

export function create(category) {
  const id = getNextId();
  const newCategory = { id, ...category };
  categories.push(newCategory);
  return newCategory;
}

export function update(id, updates) {
  const index = categories.findIndex(cat => cat.id === id);

  if (index !== -1) {
    const updatedCategory = { ...categories[index], ...updates };
    categories[index] = updatedCategory;
    return updatedCategory;
  }
  return null;
}

export function remove(id) {
  const index = categories.findIndex(cat => cat.id === id);

  if (index !== -1) {
    categories.splice(index, 1);
    return true;
  }
  return false;
}