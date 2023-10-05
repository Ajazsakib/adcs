/* eslint-disable no-underscore-dangle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatus } from '@/backend/constants';
import { asyncHandler } from '@/backend/middlewares';

import { slotRepository } from '../repositories';

/**
 * @description Get users
 * @param {ISlot} appointment
 * @access Public
 */
export const slotList = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { date } = req.query;
    // const uId = (req as any)?.user?.userId._id;
    let updatedDate;
    if (date) {
      updatedDate = new Date(`${date}`).toISOString().slice(0, 10);
    } else {
      return res.status(400).json({
        status: 400,
        message: 'Please Put The Date.',
      });
    }

    const slotData = await slotRepository.findOne({
      slotDate: updatedDate,
    });

    if (slotData) {
      const unlockedSlots = slotData.slot.filter(
        (slots) => slots.status === 'unlocked'
      );
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Slot Details fetched successfully',
        data: unlockedSlots,
      });
    }

    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Slot Details not Exist',
      data: [],
    });
  }
);
