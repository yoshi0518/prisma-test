import { prisma } from './libs/prisma';

const main = async () => {
  const updateUsers = await prisma.$executeRaw`
  update
    t_users
  set
    t_users.user_name = concat(t_users.user_name, 'Update')
  ;
  `;

  console.log({ updateUsers });
};

main()
  .catch((error) => {
    console.error('Error: ', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
