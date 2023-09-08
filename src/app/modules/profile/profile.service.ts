import prisma from '../../../shared/prisma';

const profile = async (userId: string) => {
  const result = await prisma.user.findFirst({
    where: {
      id: userId
    }
  });

  return result;
};

export const ProfileService = {
  profile
};
