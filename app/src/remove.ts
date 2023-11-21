import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const remove = async () => {
  const responseGet = await prisma.user.findUnique({
    where: {
      email: 'bob@example.com',
    },
  });

  console.log(responseGet);

  const responseDelete = await prisma.user.delete({
    where: { id: responseGet?.id },
  });

  console.log(responseDelete);
};

remove()
  .catch((error) => {
    console.error('Error: ', error);
    return;
  })
  .finally(async () => await prisma.$disconnect());
