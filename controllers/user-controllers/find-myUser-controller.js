const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();


async function findMyUser (req , res ){
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
  }

  module.exports = findMyUser;