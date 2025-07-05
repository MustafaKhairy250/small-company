const router = require('express').Router();
const { login } = require('../../controllers/auth-controllers/loginController');

router.post('/', login);

module.exports = router;