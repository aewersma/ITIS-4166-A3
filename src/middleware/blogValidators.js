import { param, query, body } from 'express-validator';

export const validateBlogId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Blog ID must be a positive integer.')
    .toInt(),
];

export const validateBlogQuery = [
  query('author')
    .optional()
    .trim()
    .escape()
    .toLowerCase(),
  query('title')
    .optional()
    .trim()
    .escape()
    .toLowerCase(),
  query('published')
    .optional()
    .isBoolean()
    .withMessage('Published must be true or false.')
    .toBoolean(),
];

export const validateCreateBlog = [
  body('title')
    .trim()
    .escape()
    .notEmpty().withMessage('Title is required.')
    .bail()
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters.'),
  body('content')
    .trim()
    .escape()
    .notEmpty().withMessage('Content is required.')
    .bail()
    .isLength({ min: 10 }).withMessage('Content must be at least 10 characters.'),
  body('author')
    .trim()
    .escape()
    .notEmpty().withMessage('Author is required.')
    .bail()
    .isAlphanumeric().withMessage('Author can only contain letters and digits.')
    .toLowerCase(),
  body('isPublished')
    .optional()
    .isBoolean().withMessage('isPublished must be true or false.')
    .toBoolean(),
];

export const validateUpdateBlog = [
  body('title')
    .optional()
    .trim()
    .escape()
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters.'),
  body('content')
    .optional()
    .trim()
    .escape()
    .isLength({ min: 10 }).withMessage('Content must be at least 10 characters.'),
  body('author')
    .optional()
    .trim()
    .escape()
    .isAlphanumeric().withMessage('Author can only contain letters and digits.')
    .toLowerCase(),
  body('isPublished')
    .optional()
    .isBoolean().withMessage('isPublished must be true or false.')
    .toBoolean(),
];