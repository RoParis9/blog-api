import { PrismaClient } from '@prisma/client'


export const database = new PrismaClient({
  log: ["error","info","query","warn"]
})
