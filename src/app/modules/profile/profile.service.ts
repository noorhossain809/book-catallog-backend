import prisma from '../../../shared/prisma';

const profile = async (userId: string) => {
  const result = await prisma.user.findFirst({
    where: {
      id: userId
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true
    }
  });

  return result;
};

export const ProfileService = {
  profile
};
