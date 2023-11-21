import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const create = async () => {
  const response = await prisma.user.create({
    data: {
      email: 'john@example.com',
      name: 'John',
      todos: {
        create: [
          { title: 'todo1', body: 'body1' },
          { title: 'todo2', body: 'body2' },
          { title: 'todo3', body: 'body3' },
        ],
      },
    },
  });

  console.log(response);
};

create()
  .catch((error) => {
    console.error('Error: ', error);
    return;
  })
  .finally(async () => await prisma.$disconnect());
