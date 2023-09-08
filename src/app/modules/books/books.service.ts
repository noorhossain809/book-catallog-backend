import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  BooksRelationalFields,
  BooksRelationalFieldsMapper,
  IBooksSearchableFields
} from './books.constant';
import { IBooksFilterRequest } from './books.interface';

const insertIntoDB = async (data: Book) => {
  const result = await prisma.book.create({
    data
  });
  return result;
};

const getAllBooks = async (
  filters: IBooksFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);

  const { searchTerm, minPrice, maxPrice, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: IBooksSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive'
        }
      }))
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (BooksRelationalFields.includes(key)) {
          return {
            [BooksRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key]
            }
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key]
            }
          };
        }
      })
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    include: {
      category: true
    },
    where: {
      ...whereConditions,
      price: {
        lte: minPrice ? Number(minPrice) : undefined,
        gte: maxPrice ? Number(maxPrice) : undefined
      }
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {}
  });

  const total = await prisma.book.count({ where: whereConditions });

  return {
    meta: {
      limit,
      page,
      total
    },
    data: result
  };
};

const getBookByCategory = async (
  categoryId: string,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[] | null>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const result = await prisma.book.findMany({
    where: {
      categoryId
    },
    include: {
      category: true
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {}
  });

  const total = await prisma.book.count();
  return {
    meta: {
      limit,
      page,
      total
    },
    data: result
  };
};

const getSingleBooks = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id
    },
    include: {
      category: true
    }
  });

  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id
    },
    data: payload,
    include: {
      category: true
    }
  });

  return result;
};

const deleteBook = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id
    },
    include: {
      category: true
    }
  });

  return result;
};

export const BookService = {
  insertIntoDB,
  getAllBooks,
  getSingleBooks,
  getBookByCategory,
  updateBook,
  deleteBook
};
