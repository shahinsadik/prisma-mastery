import { PrismaClient, UserRole } from "../generated/prisma"


const prisma = new PrismaClient();
const main = async () => {

    // create  user
    // const createUser = await prisma.user.create({
    //     data: {
    //         userName: "user2",
    //         email: "user2@gmail.com",
    //         role: UserRole.user
    //     }

    // })


    // create profile for user
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         userId: 1,
    //         bio: "This is my bio",
    //     }

    // })

    //create category for post
    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "React Native Developer",
    //     }
    // })


    //create post with category for user
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "Hello web developers",
    //         content: "Hello web developers post",
    //         authorId: 1,
    //         postCategory: {
    //             create: {
    //                 category: {
    //                     connect: {
    //                         id: 1
    //                     }
    //                 }
    //             }
    //         }

    //     },
    //     include: {
    //         postCategory: true,
    //     }
    // })

    //create post for many category
    // const createPostManyCategory = await prisma.post.create({
    //     data: {
    //         title: "Hello web developers 2",
    //         content: "Hello web developers post2",
    //         authorId: 1,
    //         postCategory: {
    //             create: [
    //                 {
    //                     categoryId: 1
    //                 },
    //                 {
    //                     categoryId: 2
    //                 },
    //                 {
    //                     categoryId: 3
    //                 },
    //                 {
    //                     categoryId: 4
    //                 },
    //             ]
    //         }

    //     },
    //     include: {
    //         postCategory: true,
    //     }
    // })
    // console.log(createPostManyCategory);







    //create single post in db
    // const result = await prisma.post.create({
    //     data: {
    //         title: "Hello World 2",
    //         content: "This is my first post",

    //         auterName: "John Doe",
    //     }
    // })
    // console.log(result)

    // const createManyPost = await prisma.post.createMany({
    //     data: [
    //         {
    //             title: "Hello World 5",
    //             content: "This is my first post",
    //             auterName: "John Doe",
    //         },
    //         {
    //             title: "Hello World 6",
    //             content: "This is my first post",
    //             auterName: "John Doe",
    //         },
    //         {
    //             title: "Hello World 5",
    //             content: "This is my first post",
    //             auterName: "John Doe",
    //         },
    //         {
    //             title: "Hello World 6",
    //             content: "This is my first post",
    //             auterName: "John Doe",
    //         },
    //     ]
    // })

}
main();