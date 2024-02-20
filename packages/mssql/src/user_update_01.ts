import { prisma } from './libs/prisma';

const main = async () => {
  const updateUser = await prisma.user.update({
    where: {
      userId: 'user1',
    },
    data: {
      userName: 'user1Update',
    },
  });

  console.log({ updateUser });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
