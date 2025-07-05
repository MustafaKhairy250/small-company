import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await prisma.users.findUnique({ where: { email: email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
     
    const { password: pw, ...userWithoutPassword } = user;
    res.status(200).json({userWithoutPassword , accessToken});
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await prisma.$disconnect();
  }
}
