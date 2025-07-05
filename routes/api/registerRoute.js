const router = require('express').Router();
const { register } = require('../../controllers/registerController');
const { registerValidator } = require('../../validators/user_validator');
const  validateRequest  = require('../../middleware/validate-request');


router.post('/',registerValidator,validateRequest, register);


module.exports = router;