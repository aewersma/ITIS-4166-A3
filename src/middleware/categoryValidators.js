import { param, body } from 'express-validator';

export const validateCategoryId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Category ID must be a positive integer.')
    .toInt(),
];

export const validateCategory = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .bail()
    .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long.'),
];