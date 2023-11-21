import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const transaction = async () => {
  try {
    await prisma.$transaction(async (prisma) => {
      const responseCreate = await prisma.todo.create({
        data: {
          title: 'title4',
          body: 'body4',
          userId: 1,
        },
      });

      console.log(responseCreate);

      const responseUpdate = await prisma.user.update({
        where: {
          id: 1,
        },
        data: {
          email: 'update2@example.com',
        },
      });

      console.log(responseUpdate);
    });
  } catch (e) {
    console.error(e);
  }
};

transaction()
  .catch((error) => {
    console.error('Error: ', error);
    return;
  })
  .finally(async () => await prisma.$disconnect());
