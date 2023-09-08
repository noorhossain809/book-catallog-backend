import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllUsers = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany();
  return result;
};

const getASingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id
    }
  });
  return result;
};
const updateASingleUser = async (id: string, payload: User): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id
    },
    data: payload
  });
  return result;
};

const deleteAUser = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id
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
