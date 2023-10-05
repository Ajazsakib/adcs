import type { IAppointment } from '@/backend/interfaces';
import { AppointmentModel } from '@/backend/models';

export class AppointmentRepository {
  async find(
    where: object,
    attributes: string[] = [],
    sortField: string = '',
    sortOrder: string = 'asc'
  ): Promise<IAppointment[]> {
    const sortDirection = sortOrder === 'desc' ? -1 : 1;
    return AppointmentModel.find(where)
      .select(attributes.join(' '))
      .sort({ [sortField]: sortDirection })
      .lean();
  }

  async create(values: object): Promise<IAppointment> {
    return AppointmentModel.create(values);
  }

  async findOne(
    where: object,
    attributes: string[] = []
  ): Promise<IAppointment> {
    return AppointmentModel.findOne(where).select(attributes.join(' ')).lean();
  }
}

export const appointmentRepository = new AppointmentRepository();
