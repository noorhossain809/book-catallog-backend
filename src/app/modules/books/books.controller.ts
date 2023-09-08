import { Book } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IBooksFilterableFields } from './books.constant';
import { BookService } from './books.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.insertIntoDB(req.body);

  sendResponse<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully!!!',
    data: result
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, IBooksFilterableFields);
  const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
  const result = await BookService.getAllBooks(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieve successfully!!!',
    meta: result.meta,
    data: result.data
  });
});

const getBookByCategory = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
  const result = await BookService.getBookByCategory(req.params.id, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books with associated category data fetched successfully!!!',
    meta: result.meta,
    data: result.data
  });
});
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBooks(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieve successfully!!!',
    data: result
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.updateBook(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully!!!',
    data: result
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBook(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully!!!',
    data: result
  });
});

export const BookController = {
  insertIntoDB,
  getAllBooks,
  getSingleBook,
  getBookByCategory,
  updateBook,
  deleteBook
};
