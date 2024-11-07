import  { PrismaClient } from '@prisma/client'
let prisma: PrismaClient;


if (process.env.NODE_ENV == 'production') {
    prisma = new PrismaClient()
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;