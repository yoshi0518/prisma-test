import { prisma } from './libs/prisma';

const main = async () => {
  const newUser = await prisma.user.create({
    data: {
      userId: 'user2',
      userName: 'user2',
      email: 'user2@example.com',
      posts: {
        createMany: {
          data: [
            {
              title: 'title2-1',
              content: 'content content content content content',
            },
            {
              title: 'title2-2',
              content: 'content content content content content',
            },
            {
              title: 'title2-3',
              content: 'content content content content content',
            },
          ],
        },
      },
    },
  });

  console.log({ newUser });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
