import { PrismaClient } from "../generated/prisma"


const prisma = new PrismaClient();
const main = async () => {
    //find all from db
    // const getAllFromDB= await prisma.post.findMany()

    //find findfast from db
    const findFirstDB = await prisma.post.findFirst({
        where: {
            published: true,
        }
    })

    //find findfast or throw error from db
    const findFirstDBOrThrowError = await prisma.post.findFirstOrThrow({
        where: {
            id: 1
        }
    })
    //find unique from db
    const findUnique = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })

    //find unique or throw error from db
    const findUniqueOrThrowError = await prisma.post.findUniqueOrThrow({
        where: {
            id: 1
        },
        select: {
            id: true,
            title: true,
            content: true,
            auterName: true,
            published: true,
        }
    })
    console.log({ findUniqueOrThrowError })
}
main();