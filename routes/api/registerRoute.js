const router = require('express').Router();
const { register } = require('../../controllers//admin-controllers/registerController');
const { registerValidator } = require('../../validators/user_validator');
const  validateRequest  = require('../../middleware/validate-request');
const checkRole = require('../../middleware/role-middleware');
const verifyJWT = require('../../middleware/verifyJWT');


router.post('/',registerValidator,validateRequest,verifyJWT,checkRole, register);


module.exports = router;