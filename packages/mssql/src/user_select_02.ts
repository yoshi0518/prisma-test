import { prisma } from './libs/prisma';

const main = async () => {
  const selectUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log({ selectUsers });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
