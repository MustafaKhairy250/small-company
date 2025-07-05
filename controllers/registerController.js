import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
export async function register (req, res) {
    const { name, email, password , role , position} = req.body;
    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = await prisma.users.create({
            data: {
                name : name,
                email : email,
                password : hashed,
                role : role,
                position : position
            },
        });
        const { password : pw , ...userWithoutPassword } = user;
        res.status(201).json(userWithoutPassword);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }finally {
        await prisma.$disconnect();
    }
}

// module.exports = { register };