import { log } from "console";
import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();
const main = async () => {

    // and filtering
    // const andfiltering = await prisma.post.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 title: {
    //                     contains: "Word"
    //                 },

    //             },
    //             { published: true }

    //         ]
    //     }
    // })


    //OR filtering
    // const orfiltering = await prisma.post.findMany({
    //     where: {
    //         OR: [
    //             {
    //                 title: {
    //                     contains: "Hello"
    //                 },

    //             },
    //             { published: true }
    //         ]
    //     }
    // })


    //NOT filtering
    // const notfiltering = await prisma.post.findMany({
    //     where: {
    //         NOT: {
    //             title: {
    //                 contains: "developers"
    //             }
    //         }
    //     }
    // })

    //startsWith/endsWith/contains/equals filtering
    const startswithfiltering = await prisma.user.findMany({
        where: {
            email: {
                startsWith: "user"
            }
        }
    })


    const userNameArray = ["user1", "user2", "user3", "user4", "user5"]
    const userNameByArray = await prisma.user.findMany({
        where: {
            userName: {
                in: userNameArray
            }
        }
    })

    const inDeptData = await prisma.user.findMany({
        where: {
            id: 1
        },
        include: {
            posts: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })

    console.dir(inDeptData, { depth: Infinity })

}
main()