import { prisma } from './libs/prisma';

const main = async () => {
  const newUsers = await prisma.user.createMany({
    data: [
      {
        userId: 'user3',
        userName: 'user3',
        email: 'user3@example.com',
      },
      {
        userId: 'user4',
        userName: 'user4',
        email: 'user4@example.com',
      },
      {
        userId: 'user5',
        userName: 'user5',
        email: 'user5@example.com',
      },
    ],
  });

  console.log({ newUsers });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
