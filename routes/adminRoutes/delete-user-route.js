const express = require('express');
const verifyJWT = require('../../middleware/verifyJWT');
const checkRole = require('../../middleware/role-middleware');
const router = express.Router();
const {deleteUser} = require('../../controllers/admin-controllers/delete-user-controller');

router.delete('/:id',verifyJWT,checkRole,deleteUser)

module.exports = router