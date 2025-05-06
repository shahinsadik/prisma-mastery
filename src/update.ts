import { log } from "console";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    // single update post in db
    // const singleUpdatePost = await prisma.post.update({
    //     where: {
    //         id: 2,
    //     },
    //     data: {
    //         title: "Hello World 3",
    //         // content: "This is my 2nd post",
    //         auterName: "John Doe 3",
    //     }
    // })

    // const updateManyPost = await prisma.post.updateMany({
    //     where: {
    //         published: false,

    //     },
    //     data: {
    //         published: true,
    //     }
    // })


    // updateManyAndReturn
    // const updateManyAndReturn = await prisma.post.updateManyAndReturn({
    //     where: {
    //         published: true,
    //     },
    //     data: {
    //         published: false,
    //     },
    //     select: {
    //         id: true,
    //         title: true,
    //         content: true,
    //         auterName: true,
    //         published: true,
    //     }
    // })

    const upsertPost = await prisma.post.upsert({
        where: {
            id: 8,
        },
        create: {
            title: "Hello World 8 create",
            content: "This is my first post",
            auterName: "John Doe",
        },
        update: {
            title: "Hello World 8 update",
            content: "This is my 8th post",
            auterName: "John Doe",
        },
        
    })

    log({ upsertPost })
}
main()