//@ts-nocheck

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient

if (process.env.NODE_ENV !== 'production') {
    prisma = new PrismaClient()
}else{
    if(!global.prisma){
        global.prisma = new PrismaClient()
    }else{
        prisma = global.prisma
    }
}

export default prisma