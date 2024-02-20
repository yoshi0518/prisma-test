import { prisma } from './libs/prisma';

const main = async () => {
  const deletePost = await prisma.post.deleteMany();
  const deleteUser = await prisma.user.deleteMany();

  console.log({ deletePost, deleteUser });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
