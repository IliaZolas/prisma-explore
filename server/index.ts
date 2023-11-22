import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.usertables.create({
    data: {
      name: 'Rich',
      surname: 'heom',
      email: 'hello@prisma.com',
      password: '*****',
      imageUrl: 'https://www.test.com',
      public_id: '123'
      posts: {
        title: 'test'
        description: 'test'
      }
      },
  })

  const allUsers = await prisma.usertables.findMany({
    select: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })