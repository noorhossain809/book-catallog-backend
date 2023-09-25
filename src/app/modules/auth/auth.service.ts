import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { IUserLogin } from './auth.interface';

const saltRounds = 12;

const insertIntoDB = async (payload: User) => {
  const { password, ...data } = payload;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const result = await prisma.user.create({
    data: {
      ...data,
      password: hashPassword
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

const login = async (payload: IUserLogin) => {
  const { email, password } = payload;

  // User find by email
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  });
  if (!user) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'User with the given email does not exist'
    );
  }

  // Verify the password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Passwords do not match');
  }

  // Generate a JWT token with user data (e.g., userId and role)
  const accessToken = jwtHelpers.createToken(
    { userId: user.id, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return accessToken;
};

export const AuthService = {
  insertIntoDB,
  login
};
