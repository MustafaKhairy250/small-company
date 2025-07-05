const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
async function updateUser(req, res) {
  try {
    const allowedFields = ["name", "email"];
    const updateData = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    }
    if (req.body.password !== undefined) {
      const { newPassword, password } = req.body;

      if (!newPassword) {
        return res
          .status(400)
          .json({ error: " New password is required to change your password" });
      }
      if (newPassword.length < 6) {
        return res
          .status(400)
          .json({ error: "Password must be at least 6 characters" });
      }
      const existingUser = await prisma.users.findUnique({
        where: { id: req.user.id },
      });
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      updateData.password = hashedPassword;
    }
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }
    const updatedUser = await prisma.users.update({
      where: { id: req.user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        position: true,
      },
    });

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = updateUser;
