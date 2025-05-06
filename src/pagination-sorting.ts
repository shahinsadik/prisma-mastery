import { log } from "console";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
const main = async () => {
    // // opset pagination and sorting
    // const opsetPagination = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2,
    // })

    // CURSOR pagination and sorting
    // const cursorPagination = await prisma.post.findMany({
    //     take: 5,
    //     skip: 0,
    //     cursor: {
    //         id: 5,
    //     },

    //     orderBy: {
    //         title: "asc",
    //     },
    // })



}
main()
