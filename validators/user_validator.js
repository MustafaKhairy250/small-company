const { body } = require('express-validator');

const registerValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars'),
  body('passwordConfirmation').custom((value, { req }) => {
    return value === req.body.password;
  }).withMessage('Passwords do not match'),
];

module.exports = { registerValidator };
