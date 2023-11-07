import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'someone@example.com',
      name: 'Someone',
      role: 'USER',
    },
  });
  console.log('Created new user: ', newUser);
  const allPosts = await prisma.post.findMany();
  console.log('All posts: ', allPosts);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { prisma };
