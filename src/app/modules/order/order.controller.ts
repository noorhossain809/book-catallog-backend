import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;

  const result = await OrderService.createOrder(user.userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result
  });
});

const getAllOrdersByCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const user = (req as any).user;
    console.log(user);

    const result = await OrderService.getAllOrdersByCustomer(user.userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order retrieve successfully',
      data: result
    });
  }
);

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  console.log(user);

  const result = await OrderService.getOrderById(user.userId, req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieve successfully', 
    data: result
  });
});

export const OrderController = {
  createOrder,
  getAllOrdersByCustomer,
  getOrderById
};
