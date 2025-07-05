const {updateEmployee} = require('../../controllers/admin-controllers/update-user-data-controller');
const express = require('express');
const verifyJWT = require('../../middleware/verifyJWT');
const checkRole = require('../../middleware/role-middleware');
const router = express.Router();

router.put('/:id',verifyJWT,checkRole,updateEmployee)

module.exports = router