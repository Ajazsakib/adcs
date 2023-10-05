import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
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
export const loginRecord = asyncHandler(
  // eslint-disable-next-line consistent-return
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body as IUser;

    const foundUser: IUser = await userRepository.findOne({ email }, [
      '_id',
      'name',
      'password',
    ]);
    console.log(foundUser);

    if (foundUser) {
      const isMatch: boolean = await compare(password, foundUser.password);
      console.log('>>>>>>>>>>>>>>>>', password);
      console.log('>>>>>>>>>>>>>>>>', foundUser.password);
      if (isMatch) {
        // Generate a JWT token
        const payload = {
          userId: foundUser, // Include user-specific data
        };

        const token = jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
        return res.status(HttpStatus.OK).json({
          status: HttpStatus.OK,
          message: 'Logged in successfully',
          data: foundUser,
          token,
        });
      }
      throw new BadRequestException('Please Enter Correct Password');
    } else {
      throw new BadRequestException('you are not registered');
    }
  }
);
