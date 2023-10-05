import type { ISlot } from '@/backend/interfaces';
import { SlotModel } from '@/backend/models';

export class SlotRepository {
  async find(
    where: object,
    attributes: string[] = [],
    sortField: string = '',
    sortOrder: string = 'asc'
  ): Promise<ISlot[]> {
    const sortDirection = sortOrder === 'desc' ? -1 : 1;
    return SlotModel.find(where)
      .select(attributes.join(' '))
      .sort({ [sortField]: sortDirection })
      .lean();
  }

  async create(values: object): Promise<ISlot> {
    return SlotModel.create(values);
  }

  async findOne(where: object, attributes: string[] = []): Promise<ISlot> {
    return SlotModel.findOne(where).select(attributes.join(' ')).lean();
  }

  async findOneAndUpdate(
    where: object,
    attributes: string[] = []
  ): Promise<ISlot> {
    return SlotModel.findOneAndUpdate(where)
      .select(attributes.join(' '))
      .lean();
  }

  async findAggregatedRecord(where: any): Promise<ISlot[]> {
    return SlotModel.aggregate([
      {
        $match: {
          slotDate: where.updatedDate,
        },
      },
      {
        $project: {
          _id: 0,
          slot: {
            $filter: {
              input: '$slot',
              as: 'slotItem',
              cond: { $eq: ['$$slotItem.status', where?.status] },
            },
          },
        },
      },
    ]);
  }
}

export const slotRepository = new SlotRepository();
