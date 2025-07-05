const router = require('express').Router();
const verifyJWT = require('../../middleware/verifyJWT');
const findMyUser  = require('../../controllers/user-controllers/find-myUser-controller');



router.get('/',verifyJWT, findMyUser)

module.exports = router