const router = require('express').Router();
const verifyJWT = require('../../middleware/verifyJWT');
const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();



router.get('/',verifyJWT,async (req , res ) => {
  try {
        const loggedUser = await prisma.users.findUnique({
        where : {
            id : req.user.id
        }
    })
    return res.json(loggedUser)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports = router