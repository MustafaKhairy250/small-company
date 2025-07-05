const {getAllData} = require('../../controllers/admin-controllers/get-all-data-controller');
const express = require('express');
const verifyJWT = require('../../middleware/verifyJWT');
const checkRole = require('../../middleware/role-middleware');
const router = express.Router();

router.get('/',verifyJWT,checkRole,getAllData)

module.exports = router