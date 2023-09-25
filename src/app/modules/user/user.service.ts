import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
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

const getASingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id
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
const updateASingleUser = async (
  id: string,
  payload: User
): Promise<Partial<User>> => {
  const result = await prisma.user.update({
    where: {
      id
    },
    data: payload,
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

const deleteAUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: {
      id
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

export const UserService = {
  getAllUsers,
  getASingleUser,
  updateASingleUser,
  deleteAUser
};
