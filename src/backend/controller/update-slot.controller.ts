/* eslint-disable no-underscore-dangle */
import type { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatus } from '@/backend/constants';
import { asyncHandler } from '@/backend/middlewares';

import { SlotModel } from '../models';

/**
 * @description Create new user with user type.
 * @url /appointment
 * @param {ISlot} slot
 * @access Public
 */
export const updateSlot = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { date, slotName } = req.body;

    const updateDate = new Date(`${date}`).toISOString().slice(0, 10);
    const result = await SlotModel.findOneAndUpdate(
      {
        slotDate: updateDate,
        slot: {
          $elemMatch: {
            name: slotName,
          },
        },
      },
      {
        $set: { 'slot.$.status': 'locked' },
      },
      { new: true }
    );
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.OK,
      message: 'Slot Updated successfully',
      result,
    });
  }
);
