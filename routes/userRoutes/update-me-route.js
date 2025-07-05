const router = require('express').Router();
const verifyJWT = require('../../middleware/verifyJWT');
const updateUser  = require('../../controllers/user-controllers/update-myUser-controller');


router.put('/',verifyJWT,updateUser)

module.exports = router