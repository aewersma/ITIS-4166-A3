import express from 'express';
import {
  getAllBlogsHandler,
  getBlogByIdHandler,
  createBlogHandler,
  updateBlogHandler,
  deleteBlogHandler,
} from '../controllers/blogController.js';
import {
  validateBlogId,
  validateBlogQuery,
  validateCreateBlog,
  validateUpdateBlog,
} from '../middleware/blogValidators.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';

const router = express.Router();

router.get('/', [validateBlogQuery, handleValidationErrors], getAllBlogsHandler);

router.post('/', [validateCreateBlog, handleValidationErrors], createBlogHandler);

router.get('/:id', [validateBlogId, handleValidationErrors], getBlogByIdHandler);

router.put('/:id', [validateBlogId, validateUpdateBlog, handleValidationErrors], updateBlogHandler);

router.delete('/:id', [validateBlogId, handleValidationErrors], deleteBlogHandler);

export default router;