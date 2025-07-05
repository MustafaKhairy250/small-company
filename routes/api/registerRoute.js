const router = require('express').Router();
const { register } = require('../../controllers/registerController');
const { registerValidator } = require('../../validators/user_validator');


router.post('/', registerValidator, register);


module.exports = router;