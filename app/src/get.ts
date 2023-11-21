import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const get = async () => {
  const response = await prisma.user.findUnique({
    where: {
      email: 'alice@example.com',
    },
  });

  console.log(response);
};

get()
  .catch((error) => {
    console.error('Error: ', error);
    return;
  })
  .finally(async () => await prisma.$disconnect());
