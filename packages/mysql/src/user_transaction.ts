import { prisma } from './libs/prisma';

const main = async () => {
  try {
    await prisma.$transaction(async (prisma) => {
      const createUser1 = await prisma.user.create({
        data: {
          userId: 'tes1',
          userName: 'tes1',
          email: 'test1@example.com',
        },
      });

      const createUser2 = await prisma.user.create({
        data: {
          userId: 'tes1',
          userName: 'tes1',
          email: 'test1@example.com',
        },
      });

      console.log({ createUser1, createUser2 });
    });
  } catch (error) {
    console.error(error);
  }
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
