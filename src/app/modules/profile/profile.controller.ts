import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './profile.service';

const profile = catchAsync(async (req: Request, res: Response) => {
  const user = (req as any).user;
  console.log(user);

  const result = await ProfileService.profile(user.userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieve successfully',
    data: result
  });
});

export const ProfileController = {
  profile
};
