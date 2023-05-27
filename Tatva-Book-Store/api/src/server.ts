import express, { Request, Response, response } from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getRoles() {
    const allRoles = await prisma.role.findMany()
    return allRoles
}

async function createRole(type: string) {
    const role = await prisma.role.create({
        data: {
            type: type
        }
    })
    return role
}

interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    roleId: string,
    password: string
}

async function createUser(newUserData: UserData) {
    const newUser = await prisma.user.create({
        data: {
            firstName: newUserData.firstName,
            lastName: newUserData.lastName,
            email: newUserData.email,
            roleId: newUserData.roleId,
            password: newUserData.password
        }
    })
    return newUser
}

const app = express()
const port = 8000

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get('/api/user/role', (request: Request, response: Response) => {
    getRoles()
        .then(async (allRoles) => {
            response.json(allRoles)
            await prisma.$disconnect()
        })
        .catch(async (error) => {
            response.json(error)
            await prisma.$disconnect()
            process.exit(1)
        })
})

app.post('/api/user/role', (request: Request, response: Response) => {
    const { type } = request.body
    createRole(type)
        .then(async (role) => {
            response.status(201).json(role)
            await prisma.$disconnect()
        })
        .catch(async (error) => {
            response.json(error)
            await prisma.$disconnect()
            process.exit(1)
        })
})

app.post('/api/user', (request: Request, response: Response) => {
    const { newUserData } = request.body
    createUser(newUserData)
        .then(async (newUser) => {
            response.status(201).json(newUser)
            await prisma.$disconnect()
        })
        .catch(async (error) => {
            response.json(error)
            await prisma.$disconnect()
            process.exit(1)
        })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
