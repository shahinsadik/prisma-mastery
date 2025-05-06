import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient();

const main = async () => {
    // delete single post in db
    // const deleteSinglePost = await prisma.post.delete({
    //     where: {
    //         id: 1,
    //     }
    // })
    // console.log({ deleteSinglePost })

    // delete many post in db
    const deleteManyPost = await prisma.post.deleteMany({
        where: {
            title: "Hello World 3",
        }
    })

    // delete All post in db

    // const deleteAllPost = await prisma.post.deleteMany({})

    
}
main()