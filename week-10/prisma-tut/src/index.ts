import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const User = prisma.user

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await User.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            email: true,
            id: true
        }
    })
    console.log(res)
}

async function getUser(username: string) {
    const res = await User.findUnique({
        where: {
            email: username
        }
    })
    console.log(res)
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await User.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
}

async function deleteUser(username :string, password :string) {
    const res = await User.delete({
        where: {
            email: username,
            password
        }
    })
    console.log(res)
}

// insertUser("user2", "pass123", "user", "1")
// getUser("user1")
// updateUser("user1", { firstName: "vik", lastName: "rock"})
deleteUser("user2", "pass123")