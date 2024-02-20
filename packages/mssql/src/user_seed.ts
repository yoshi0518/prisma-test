import { prisma } from './libs/prisma';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'],
// });

const users = [
  { userId: 'test1', userName: 'test1', email: 'test1@example.com' },
  { userId: 'test2', userName: 'test2', email: 'test2@example.com' },
  { userId: 'test3', userName: 'test3', email: 'test3@example.com' },
  { userId: 'test4', userName: 'test4', email: 'test4@example.com' },
  { userId: 'test5', userName: 'test5', email: 'test5@example.com' },
];

const main = async () => {
  users.forEach(
    async (user) =>
      await prisma.user.create({
        data: {
          userId: user.userId,
          userName: user.userName,
          email: user.email,
        },
      }),
  );
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
