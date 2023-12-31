import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data
  });

  return result;
};

const getAllCategories = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({
    include: {
      books: true
    }
  });

  return result;
};

const getASingleCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id
    },
    include: {
      books: true
    }
  });

  return result;
};

const updateASingleCategory = async (
  id: string,
  payload: Category
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id
    },
    data: payload
  });

  return result;
};

const deleteASingleCategory = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id
    }
  });

  return result;
};

export const CategoryService = {
  insertIntoDB,
  getAllCategories,
  getASingleCategory,
  updateASingleCategory,
  deleteASingleCategory
};
