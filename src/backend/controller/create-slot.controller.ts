/* eslint-disable no-underscore-dangle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatus } from '@/backend/constants';
import { asyncHandler } from '@/backend/middlewares';

import { slotRepository } from '../repositories';

/**
 * @description Create new user with user type.
 * @url /appointment
 * @param {IAppointment} user
 * @access Public
 */
export const createSlot = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // const uId = (req as any)?.user?.userId._id;

    const slot: any =
      // {} ??
      await slotRepository.create({
        slotDate: new Date().toISOString().slice(0, 10),
        slot: [
          {
            name: '09-10',
            status: 'unlocked',
          },
          {
            name: '10-11',
            status: 'unlocked',
          },
          {
            name: '11-12',
            status: 'unlocked',
          },
          {
            name: '12-01',
            status: 'unlocked',
          },
          {
            name: '01-02',
            status: 'unlocked',
          },
          {
            name: '02-03',
            status: 'unlocked',
          },
          {
            name: '03-04',
            status: 'unlocked',
          },
          {
            name: '04-05',
            status: 'unlocked',
          },
          {
            name: '05-06',
            status: 'unlocked',
          },
          {
            name: '06-07',
            status: 'unlocked',
          },
        ],
      });

    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.OK,
      message: 'Slot Booked successfully',
      slot,
    });
  }
);
