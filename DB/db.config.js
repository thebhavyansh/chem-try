import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient({
    log: ["querry","error"]
})

export default prisma;