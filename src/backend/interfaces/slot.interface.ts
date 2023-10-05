import type { Document } from 'mongoose';

interface ISlotItem {
  name: string;
  status: string;
}

export interface ISlot extends Document, ISlotItem {
  slotDate: Date;
  slot: [{ name: string; status: string }];
  createdAt: Date;
  updatedAt: Date;
}
