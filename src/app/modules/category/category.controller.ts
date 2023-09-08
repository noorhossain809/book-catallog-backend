import { Category } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertIntoDB(req.body);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrieved successfully',
    data: result
  });
});

const getASingleCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getASingleCategory(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Category retrieved successfully',
    data: result
  });
});

const updateASingleCategory = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await CategoryService.updateASingleCategory(
      req.params.id,
      data
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category updated successfully!!!',
      data: result
    });
  }
);

const deleteACategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteASingleCategory(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully!!!',
    data: result
  });
});

export const CategoryController = {
  insertIntoDB,
  getAllCategories,
  getASingleCategory,
  updateASingleCategory,
  deleteACategory
};
