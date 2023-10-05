/* eslint-disable func-names */
import { model, models, Schema } from 'mongoose';

import { softDeletePlugin } from '@/backend/plugins';

import { DAY_IN_MS } from '../constants';

const appointmentSchema = new Schema(
  {
    pets: {
      type: String,
      required: [true, 'Pets is Required'],
      trim: true,
    },
    doctor: {
      type: String,
      required: [true, 'Doctor is Required'],
      trim: true,
    },
    appointMessage: {
      type: String,
      required: true,
    },
    booked: {
      type: Boolean,
      default: false,
    },
    waitingNumber: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    phoneNumber: {
      type: String,
      // unique: true,
      default: null,
    },

    timeSlot: {
      type: String,
      default: null,
    },

    name: {
      type: String,
      trim: true,
    },
    bookedOn: {
      type: Date,
      default: new Date(+new Date() + DAY_IN_MS),
    },
  },
  { timestamps: true }
);

appointmentSchema.plugin(softDeletePlugin);

export default models?.Appointment! || model('Appointment', appointmentSchema);
