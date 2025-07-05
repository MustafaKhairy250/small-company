const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();

async function getAllData(req, res) {
    try {
        const allData = await prisma.users.findMany(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    position: true,
                    createdAt: true
                },
            }
        );
        return res.json(allData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = { getAllData };