const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();
async function updateEmployee(req, res) {
  const { id } = req.params;
  const { name, email, position, role } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (email && email !== user.email) {
      const existingEmail = await prisma.users.findUnique({
        where: { email },
      });

      if (existingEmail) {
        return res.status(400).json({ error: "Email is already in use" });
      }
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (position) updateData.position = position;
    if (role) updateData.role = role;

    const updatedUser = await prisma.users.update({
      where: { id: Number(id) },
      data: updateData,
    });

    const { password, ...userWithoutPassword } = updatedUser;

    res.json(userWithoutPassword);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}

module.exports = { updateEmployee };
