const router = require('express').Router();
const { login } = require('../../controllers/general-controllers/loginController');

router.post('/', login);

module.exports = router;