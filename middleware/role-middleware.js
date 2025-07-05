const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();

async function checkRole(req, res, next) {
   try {
    const user = await prisma.users.findUnique({
      where: {
        id : req.user.id
      },
    });
    if (user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'You do not have permission to perform this action' });
    }
    next();
   } catch (err) {
    res.status(500).json({ error: err.message });
   }
  }
    
  module.exports = checkRole ;