import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const update = async () => {
  const responseGet = await prisma.user.findUnique({
    where: {
      email: 'alice@example.com',
    },
  });

  console.log(responseGet);

  const responseUpdate = await prisma.user.update({
    where: { id: responseGet?.id },
    data: { email: 'update@example.com' },
  });

  console.log(responseUpdate);
};

update()
  .catch((error) => {
    console.error('Error: ', error);
    return;
  })
  .finally(async () => await prisma.$disconnect());
