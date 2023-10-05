/* eslint-disable no-underscore-dangle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatus } from '@/backend/constants';
import type { IAppointment } from '@/backend/interfaces';
import { asyncHandler } from '@/backend/middlewares';
import { appointmentRepository } from '@/backend/repositories';

/**
 * @description Get users
 * @param {IAppointment} appointment
 * @access Public
 */
export const fetchAppointmentDetails = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const uId = (req as any)?.user?.userId._id;
    const users: IAppointment = await appointmentRepository.findOne({ uId });

    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Appointment Details fetched successfully',
      data: users,
    });
  }
);
