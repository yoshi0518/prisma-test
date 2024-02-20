import { prisma } from './libs/prisma';

const main = async () => {
  const deleteUser = await prisma.user.delete({
    where: {
      userId: 'user1',
    },
  });

  console.log({ deleteUser });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
