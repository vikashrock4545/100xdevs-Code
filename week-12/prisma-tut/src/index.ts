import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username, 
            password, 
            firstName, 
            lastName
        }
    })
    console.log(res)
}

interface updateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: updateParams) {
    const res = await prisma.user.updateMany({
        data: {
            firstName,
            lastName
        },
        where: {username}
    })
    console.log(res)
}

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            username
        }
    })
    console.log(res)
}

async function createTodo(userId: number, title: string, description: string) {
    const res = await prisma.todo.create({
        data: {
            userId,
            title,
            description
        }
    })
    console.log(res)
}

async function getTodos(userId: number) {
    const res = await prisma.todo.findMany({
        where: {
            userId
        }
    })
    console.log(res)
}

async function getToDosAndUserDetails(userId: number) {
    const res = await prisma.todo.findMany({
        where: {
            userId
        },
        select: {
            user: true,
            title: true,
            description: true 
        }
    })
    console.log(res)
}

// insertUser("admin1", "rock123", "vikash", "rock")
// updateUser("admin1", {"firstName": "vikash1", "lastName": "rock1"})
// getUser("admin1")
// createTodo(1, "gym", "go to gym")
// createTodo(1, "run", "go to run")
// getTodos(1)
getToDosAndUserDetails(1)