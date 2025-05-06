import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient(
    {
        log: [
            { emit: 'event', level: 'query' },
            // { emit: 'event', level: 'info' },
            // { emit: 'event', level: 'warn' },
            // { emit: 'event', level: 'error' }
        ]
    }
);
prisma.$on("query", (e) => {
    console.log("event:", e);
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
})
const main = async () =>{
 
    const getAllUsers = await prisma.post.findMany({

    })
    // console.log(getAllUsers,);
    
}
main()