import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result
  });
});

const getASingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getASingleUser(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result
  });
});

const updateASingleUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserService.updateASingleUser(req.params.id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully!!!',
    data: result
  });
});

const deleteAUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteAUser(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully!!!',
    data: result
  });
});

export const UserController = {
  getAllUsers,
  getASingleUser,
  updateASingleUser,
  deleteAUser
};
