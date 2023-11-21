import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const gets = async () => {
  const response = await prisma.user.findMany({
    include: {
      todos: true,
    },
  });

  console.log(response);
};

gets()
  .catch((error) => {
    console.error('Error: ', error);
    return;
  })
  .finally(async () => await prisma.$disconnect());
