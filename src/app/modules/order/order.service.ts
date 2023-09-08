import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createOrder = async (customerId: string, data: any) => {
  const customerInfo = await prisma.user.findFirst({
    where: {
      id: customerId
    }
  });

  if (!customerInfo) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Customer Not Found');
  }

  const result = await prisma.order.create({
    data: {
      ...data,
      user: {
        connect: {
          id: customerInfo?.id
        }
      }
    }
  });

  return result;
};

const getAllOrdersByCustomer = async (customerId: string) => {
  const customerInfo = await prisma.user.findFirst({
    where: {
      id: customerId
    }
  });

  if (customerInfo) {
    // throw new ApiError(httpStatus.BAD_REQUEST, 'Customer Not Found');
    const result = await prisma.order.findMany({
      where: {
        user: {
          id: customerInfo?.id
        }
      }
    });
    return result;
  }

  const result = await prisma.order.findMany({});

  return result;
};

const getOrderById = async (customerId: string, id: string) => {
  const customerInfo = await prisma.user.findFirst({
    where: {
      id: customerId
    }
  });

  if (customerInfo) {
    // throw new ApiError(httpStatus.BAD_REQUEST, 'Customer Not Found');
    const result = await prisma.order.findUnique({
      where: {
        id,
        user: {
          id: customerInfo?.id
        }
      }
    });
    return result;
  }

  const result = await prisma.order.findUnique({
    where: {
      id
    }
  });

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrdersByCustomer,
  getOrderById
};
