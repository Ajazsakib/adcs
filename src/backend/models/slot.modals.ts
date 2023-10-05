/* eslint-disable func-names */
import { model, models, Schema } from 'mongoose';

import { softDeletePlugin } from '@/backend/plugins';

const slotSchema = new Schema(
  {
    slotDate: {
      type: String,
      default: null,
    },
    slot: [
      {
        _id: false,
        name: {
          type: String,
          trim: true,
          default: '9-10',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '10-11',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '11-12',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '12-01',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '01-02',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '02-03',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '03-04',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
      {
        name: {
          type: String,
          trim: true,
          default: '04-05',
        },
        status: {
          type: String,
          trim: true,
          enum: ['unlocked', 'locked'],
          default: 'unlocked',
        },
      },
    ],
  },
  { timestamps: true }
);

slotSchema.plugin(softDeletePlugin);

export default models?.Slot! || model('Slot', slotSchema);
