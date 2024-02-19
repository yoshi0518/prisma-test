import { prisma } from './libs/prisma';

const main = async () => {
  const newUser = await prisma.user.create({
    data: {
      userId: 'user1',
      userName: 'user1',
      email: 'user1@example.com',
    },
  });

  console.log({ newUser });
};

main();
