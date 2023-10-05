import type { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatus } from '@/backend/constants';
import { BadRequestException } from '@/backend/exceptions';
import type { IUser } from '@/backend/interfaces';
import { asyncHandler } from '@/backend/middlewares';
import { userRepository } from '@/backend/repositories';

/**
 * @description Create new user with user type.
 * @url /appointment
 * @param {IUser} user
 * @access Public
 */
export const logoutRecord = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, password, phoneNumber } = req.body as IUser;

    const foundUser: IUser = await userRepository.findOne({ email }, ['_id']);
    if (foundUser) {
      throw new BadRequestException('Email is already exist');
    }

    const user: IUser = await userRepository.create({
      name,
      email,
      password,

      phoneNumber: phoneNumber ?? null,
    });

    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Account Registered successfully',
      data: user,
    });
  }
);
