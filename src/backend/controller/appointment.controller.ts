/* eslint-disable no-underscore-dangle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatus } from '@/backend/constants';
import { BadRequestException } from '@/backend/exceptions';
import type { IAppointment } from '@/backend/interfaces';
import { asyncHandler } from '@/backend/middlewares';
import { appointmentRepository } from '@/backend/repositories';

/**
 * @description Create new user with user type.
 * @url /appointment
 * @param {IAppointment} user
 * @access Public
 */
export const appointmentRecord = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { pets, doctor, date, timeSlot, name, appointMessage, phoneNumber } =
      req.body as IAppointment;
    const uId = (req as any)?.user?.userId._id;

    const foundAll: IAppointment[] = await appointmentRepository.find(
      {},
      ['waitingNumber'], // List of attributes to select
      'createdAt', // Field to sort by
      'desc' // Sorting order)
    );

    const foundUser: IAppointment = await appointmentRepository.findOne(
      { uId },
      ['_id', 'bookedOn']
    );

    if (foundUser && foundUser?.bookedOn > new Date()) {
      throw new BadRequestException('you have Booked Already');
    }
    const newUser: any =
      // {} ??
      await appointmentRepository.create({
        pets,
        doctor,
        appointMessage,
        date,
        timeSlot,
        name,
        user: uId,
        waitingNumber: (foundAll[0]?.waitingNumber ?? 0) + 1,
        phoneNumber: phoneNumber ?? null,
      });

    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.OK,
      message: 'Appointment Booked successfully',
      data: newUser,
    });
  }
);
