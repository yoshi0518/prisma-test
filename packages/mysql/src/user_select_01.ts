import { prisma } from './libs/prisma';

const main = async () => {
  const selectUser = await prisma.user.findUnique({
    select: {
      id: true,
      userId: true,
      updatedAt: true,
    },
    where: {
      userId: 'user1',
    },
  });

  console.log({ selectUser });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
