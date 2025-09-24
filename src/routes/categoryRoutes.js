import express from 'express';
import {
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  createCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} from '../controllers/categoryController.js';
import {
  validateCategoryId,
  validateCategory,
} from '../middleware/categoryValidators.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';

const router = express.Router();

router.get('/', getAllCategoriesHandler);

router.post('/', [validateCategory, handleValidationErrors], createCategoryHandler);

router.get('/:id', [validateCategoryId, handleValidationErrors], getCategoryByIdHandler);

router.put('/:id', [validateCategoryId, validateCategory, handleValidationErrors], updateCategoryHandler);

router.delete('/:id', [validateCategoryId, handleValidationErrors], deleteCategoryHandler);

export default router;