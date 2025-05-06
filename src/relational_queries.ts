
import { inflate } from "zlib";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {

    //fluent API
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1,

    //     },

    // }).posts()

    //include API / populate API
    const result = await prisma.user.findUnique({
        where: {
            id: 1,

        },
        include: {
            posts: true
        }

    })

    //relational filtering
    const publishedUserPost = await prisma.user.findMany({
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }

    })

    console.dir(publishedUserPost, {depth: Infinity})


}

main()