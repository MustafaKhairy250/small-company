import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function checkRole(req, res, next) {
    const { role } = prisma.users.findUnique({
      where: {
        role: req.user,
      },
    });
    if (role !== 'ADMIN') {
      return res.status(403).json({ error: 'You do not have permission to perform this action' });
    }
    next();
  }
    
  export { checkRole };