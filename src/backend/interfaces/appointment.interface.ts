import type { Document } from 'mongoose';

export interface IAppointment extends Document {
  pets: string;
  doctor: string;
  appointMessage: string;
  booked: boolean;
  waitingNumber: number;
  user: string;
  date: Date;
  timeSlot: string;
  name: string;
  phoneNumber: string;
  bookedOn: Date;
  createdAt: Date;
  updatedAt: Date;
}
